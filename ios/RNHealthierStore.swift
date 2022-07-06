import Foundation
import HealthKit

class RNHealthierStore {
    private var store: HKHealthStore?
    
    static let shared: RNHealthierStore = RNHealthierStore()
    
    private init() {
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
                }
                //
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
                    }
                }
            }
            
            completion(data, nil)
        }
        s.execute(query)
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
