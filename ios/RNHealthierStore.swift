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
        }
      
      completion(data, nil)
    }
    s.execute(query)
  }
}
