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
    
  func objectObserverQuery() -> Void {
    // TODO: IMPLEMENT ME!
  }

  func observe2(sampleType: HKObjectType, predicate: NSPredicate?) -> Void {
    guard let s = store else {
      // TODO: HANDLE ERROR!
      // throw RNHealthierError.HealthStoreNotAvailable
      return;
    }
    
    guard let sampleType = sampleType as? HKSampleType else {
      // TODO: HANDLE ERROR!
      // reject("", "Invalid Sample Type.", nil)
      return
    }
    
    let query = HKObserverQuery(sampleType: sampleType, predicate: predicate) { q, completionHandler, err in
      // TODO: IMPLEMENT ME!
    }
    
    s.execute(query)
    s.enableBackgroundDelivery(for: sampleType, frequency: .immediate) {
      success, err in
      // TODO: IMPLEMENT ME!
    }
 }
  
  func unobserve(sampleType: HKObjectType) -> Void {
    guard let s = store else {
      // TODO: HANDLE ERROR!
      // throw RNHealthierError.HealthStoreNotAvailable
      return
    }
    
    s.disableBackgroundDelivery(for: sampleType) { success, err in
      // TODO: IMPLEMENT ME!
    }
  }
    
    /*
     let query = HKObserverQuery(sampleType: type, predicate: nil) { query, @escaping completionHandler, error in
         //
     }
    
     */
    
    func observe (sampleType: HKObjectType, emitter: RNHealthierObservationEmitter) {
        guard let s = store else {
          // TODO: HANDLE ERROR!
          // throw RNHealthierError.HealthStoreNotAvailable
          return
        }
        
        guard let sampleType = sampleType as? HKSampleType else {
          // TODO: HANDLE ERROR!
          // reject("", "Invalid Sample Type.", nil)
          return
        }
        
        
        let query = HKObserverQuery(sampleType: sampleType, predicate: nil) { q, completionHandler, err in
          // TODO: IMPLEMENT ME!
            emitter.completionHandler = completionHandler;
            emitter.notifyDataAvailable("HeartRate");
        }
        s.execute(query)
        s.enableBackgroundDelivery(for: sampleType, frequency: .immediate) { success, error in
            if success{
                NSLog("BACKGROUND DELIVERY ENABLED!")
            } else {
                NSLog("BACKGROUND DELIVERY FAILED")
            }
        }
    }
}

/*
 healthKitStore.executeQuery(query)
 healthKitStore.enableBackgroundDeliveryForType(sampleType, frequency: .Immediate, withCompletion: {(succeeded: Bool, error: NSError!) in

     if succeeded{
         println("Enabled background delivery of weight changes")
     } else {
         if let theError = error{
             print("Failed to enable background delivery of weight changes. ")
             println("Error = \(theError)")
         }
     }
 })
 
 */

/*
private func setUpBackgroundDeliveryForDataTypes(types: Set<HKObjectType>) {
   for type in types {
     guard let sampleType = type as? HKSampleType else {
       debugPrint("ERROR: \(type) is not an HKSampleType");
       continue
     }
     var query: HKQuery!
     query = HKObserverQuery(sampleType: sampleType, predicate: nil) { [weak self] query, completionHandler, error in
       if error != nil {
         debugPrint("observer query update handler called for type \(type), error: \(error?.localizedDescription ?? "")")
         return
       }
       guard let strongSelf = self else { return }
       strongSelf.queryForUpdates(type: type)
       completionHandler()
     }
     healthStore.execute(query)
     healthStore.enableBackgroundDelivery(for: type, frequency: .immediate) { success, error in
       if error != nil {
         debugPrint("enableBackgroundDeliveryForType handler called for \(type) - success: \(success), error: \(error?.localizedDescription ?? "")")
         return
       }
       debugPrint("enableBackgroundDeliveryForType: \(type)")
     }
   }
 }
*/
