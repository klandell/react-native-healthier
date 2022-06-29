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
  
  func sampleQuery(sampleType: HKObjectType, predicate: NSPredicate?, limit: Int?, sortDescriptors: [NSSortDescriptor]?, completion: @escaping ([Any]?, Error?) -> Void) -> Void {
    guard let s = store else {
      completion(nil, RNHealthierError.HealthStoreNotAvailable)
      return;
    }
    
    guard let sampleType = sampleType as? HKSampleType else {
      completion(nil, RNHealthierError.InvalidSampleType)
      return;
    }

    // A limit of 0 or nil indicate NO LIMIT.
    var lim = limit ?? Int(HKObjectQueryNoLimit)
    if lim == 0 {
      lim = Int(HKObjectQueryNoLimit)
    }
    
    let query = HKSampleQuery(sampleType: sampleType, predicate: predicate, limit: lim, sortDescriptors: sortDescriptors) { q, res, err in
      // The JS can't handle the data in its raw form, so we are going to do some conversion
      // to get it into a format the react native can deal with.
      let data: [Any] = []
      
      // TODO: IMPLEMENT ME!
      
      completion(data, nil)
    }
    s.execute(query)
  }
    
  func objectObserverQuery() -> Void {
    // TODO: IMPLEMENT ME!
  }

  func observe(sampleType: HKObjectType, predicate: NSPredicate?) -> Void {
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
}
