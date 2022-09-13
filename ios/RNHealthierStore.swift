import Foundation
import HealthKit

@objc public class RNHealthierStore : NSObject {
    private var store: HKHealthStore?
    
    static let shared: RNHealthierStore = RNHealthierStore()
    
    @objc public class func sharedInstance() -> RNHealthierStore {
      return RNHealthierStore.shared
    }
    
    private override init() {
        if (RNHealthierStore.isAvailable()) {
            store = HKHealthStore()
        }
    }
    
    static func isAvailable() -> Bool {
        return HKHealthStore.isHealthDataAvailable()
    }
    
    func supportsHealthRecords() -> Bool {
        if let s = store, #available(iOS 12.0, *) {
            return s.supportsHealthRecords()
        } else {
            return false
        }
    }
    
    func requestAuthorization(toShare: Set<HKSampleType>?, read: Set<HKObjectType>?, completion: @escaping (Bool, Error?) -> Void) -> Void {
        guard let s = store else {
            return completion(false, RNHealthierError.HealthStoreNotAvailable);
        }
        s.requestAuthorization(toShare: toShare, read: read, completion: completion)
    }
    
    func sampleQuery(sampleTypeString: String, predicate: NSPredicate?, limit: Int?, sortDescriptors: [NSSortDescriptor]?, completion: @escaping ([Any]?, Error?) -> Void) -> Void {
        guard let s = store else {
            completion(nil, RNHealthierError.HealthStoreNotAvailable)
            return;
        }
        
        guard let sampleTypeEnum = RNHealthierObjectTypeIdentifier.init(rawValue: sampleTypeString),
              let sampleType = RNHealthierUtils.getObjectType(forIdentifier: sampleTypeEnum) as? HKSampleType else {
            completion(nil, RNHealthierError.InvalidSampleType)
            return;
        }
        
        // A limit of 0 or nil indicate NO LIMIT.
        var lim = limit ?? Int(HKObjectQueryNoLimit)
        if lim == 0 {
            lim = Int(HKObjectQueryNoLimit)
        }
        
        // TODO: RESULT OPTIONS
        let query = HKSampleQuery(sampleType: sampleType, predicate: predicate, limit: lim, sortDescriptors: sortDescriptors) { query, results, error in
            // The JS can't handle the data in its raw form, so we are going to do some conversion
            // to get it into a format the react native can deal with.
            var data: [[String: Any]] = []
            
            // TODO: This is not going to call the completion handler if the
            // data type  doesn't match the one's we've hardcoded compatibility for
            // Fix that.

            // Quantity Samples
            if let samples = results as? [HKQuantitySample] {
                for sample in samples {
                    if let unit = RNHealthierUtils.getDefaultUnit(forIdentifier: sampleTypeEnum) {
                        data.append([
                            "uuid": sample.uuid.uuidString,
                            "startAt": sample.startDate.timeIntervalSince1970,
                            "endAt": sample.endDate.timeIntervalSince1970,
                            "value": sample.quantity.doubleValue(for: HKUnit.init(from: unit)),
                            "unit": unit
                        ])
                    }
                    completion(data, nil)
                }
            }
            
            // Category Samples
            if let samples = results as? [HKCategorySample] {
                for sample in samples {
                    data.append([
                        "uuid": sample.uuid.uuidString,
                        "startAt": sample.startDate.timeIntervalSince1970,
                        "endAt": sample.endDate.timeIntervalSince1970,
                        "value": sample.value
                    ])
                    completion(data, nil)
                }
            }
            
            // Clinical Records
            if #available(iOS 12.0, *) {
                if let samples = results as? [HKClinicalRecord] {
                    for sample in samples {
                        var fhirRelease: String?;
                        var fhirVersion: String?;
                        var fhirData: Any?;
                        
                        if let fhirRecord = sample.fhirResource {
                            if #available(iOS 14.0, *) {
                                let fhirResourceVersion = fhirRecord.fhirVersion
                                fhirRelease = fhirResourceVersion.fhirRelease.rawValue;
                                fhirVersion = fhirResourceVersion.stringRepresentation;
                            } else {
                                // iOS < 14 uses DSTU2
                                fhirRelease = "DSTU2";
                                fhirVersion = "1.0.2";
                            }
                         
                            do {
                                fhirData = try JSONSerialization.jsonObject(with: fhirRecord.data, options: [])
                            }
                            catch {
                                // TODO: Handle JSON error
                            }
                        }
                        
                        data.append([
                            "uuid": sample.uuid.uuidString,
                            "startAt": sample.startDate.timeIntervalSince1970,
                            "endAt": sample.endDate.timeIntervalSince1970,
                            "fhirRelease": fhirRelease!,
                            "fhirVersion": fhirVersion!,
                            "fhirData": fhirData!,
                        ])
                        completion(data, nil)
                    }
                }
            } else {
                // Send an empty data array back
                completion(data, nil)
            }

            

            var seriesSamplesProcessed = 0;

            if #available(iOS 13.0, *) {
                if let samples = results as? [HKHeartbeatSeriesSample] {
                    for sample in samples {
                        var elem: [String: Any] = [
                            "uuid": sample.uuid.uuidString,
                            "startAt": sample.startDate.timeIntervalSince1970,
                            "endAt": sample.endDate.timeIntervalSince1970
                        ];
                        var heartbeats: [[String: Any]] = []
                        
                        let subquery = HKHeartbeatSeriesQuery(heartbeatSeries: sample) { subquery, timeSinceSeriesStart, precededByGap, done, error in
                            if error == nil {
                                heartbeats.append([
                                    "elapsed": timeSinceSeriesStart,
                                    "precededByGap": precededByGap
                                ])
                            }
                            if done {
                                elem["heartbeats"] = heartbeats
                                seriesSamplesProcessed += 1
                                if (seriesSamplesProcessed == samples.count) {
                                    completion(data, nil)
                                }
                            }
                        }
                    }
                }
            } else {
                // Send an empty data array back
                completion(data, nil)
            }
        }
        s.execute(query)
    }
    
    @objc(observe:completion:)
    public func observe(sampleTypeString: String, completion: @escaping (@escaping HKObserverQueryCompletionHandler, Error?) -> Void) {
        
        guard let s = store else {
            // TODO: ERROR return completion(false, RNHealthierError.HealthStoreNotAvailable);
            return;
        }
        
        guard let sampleTypeEnum = RNHealthierObjectTypeIdentifier.init(rawValue: sampleTypeString),
              let sampleType = RNHealthierUtils.getObjectType(forIdentifier: sampleTypeEnum) as? HKSampleType else {
            // TODO: ERROR return completion(false, RNHealthierError.InvalidSampleType)
            return;
        }
        
        let query = HKObserverQuery(sampleType: sampleType, predicate: nil) {
            query, completionHandler, error in
            completion(completionHandler, error)
        }
        
        s.execute(query);
    }
    
    @objc(enableBackgroundDelivery:updateFrequency:completion:)
    public func enableBackgroundDelivery(sampleTypeString: String, updateFrequency: HKUpdateFrequency, completion: @escaping (Bool, Error?) -> Void) -> Void {
        guard let s = store else {
            return completion(false, RNHealthierError.HealthStoreNotAvailable);
        }
        
        guard let sampleTypeEnum = RNHealthierObjectTypeIdentifier.init(rawValue: sampleTypeString),
              let sampleType = RNHealthierUtils.getObjectType(forIdentifier: sampleTypeEnum) as? HKSampleType else {
            return completion(false, RNHealthierError.InvalidSampleType)
        }
        
        s.enableBackgroundDelivery(for: sampleType, frequency: updateFrequency, withCompletion: completion)
    }
    
    func disableBackgroundDelivery(sampleTypeString: String, completion: @escaping (Bool, Error?) -> Void) -> Void {
        guard let s = store else {
            return completion(false, RNHealthierError.HealthStoreNotAvailable);
        }
        
        guard let sampleTypeEnum = RNHealthierObjectTypeIdentifier.init(rawValue: sampleTypeString),
              let sampleType = RNHealthierUtils.getObjectType(forIdentifier: sampleTypeEnum) as? HKSampleType else {
            return completion(false, RNHealthierError.InvalidSampleType)
        }
        
        s.disableBackgroundDelivery(for: sampleType, withCompletion: completion)
    }
    
    func disableAllBackgroundDelivery(completion: @escaping (Bool, Error?) -> Void) -> Void {
        guard let s = store else {
            return completion(false, RNHealthierError.HealthStoreNotAvailable);
        }
        s.disableAllBackgroundDelivery(completion: completion)
    }
}

/*
 
 guard let actualSamples = samples else {
 // Handle the error here.
 print("*** An error occurred: \(error?.localizedDescription ?? "nil") ***")
 return
 }
 
 let allergySamples = actualSamples as? [HKClinicalRecord]
 // Do something with the allergy samples here...
 */
