// https://developer.apple.com/forums/thread/704685
import Foundation

@objc class RNHealthierObserver: NSObject {
    private var emitter: RNHealthierObservationEmitter?
    
    static let shared: RNHealthierObserver = RNHealthierObserver()
    
    @objc override private init() {
      if (RNHealthierStore.isAvailable()) {
        emitter = RNHealthierObservationEmitter()
      }
    }
    
    @objc func blah() -> Void {
        if !RNHealthierStore.isAvailable() {
            return;
        }
        
        // TODO: MAKE THIS DYNAMIC!
        let dataTypes: [HKObjectType] = [
            RNHealthierUtils.getObjectType(forIdentifier: RNHealthierObjectTypeIdentifier.HeartRate)!
        ];
        
        RNHealthierStore.shared.requestAuthorization(toShare: nil, read: Set(dataTypes)) { success, error in
            if let emiter = self.emitter {
                RNHealthierStore.shared.observe(sampleType: RNHealthierUtils.getObjectType(forIdentifier: RNHealthierObjectTypeIdentifier.HeartRate)!, emitter: emiter)
            }
        }
    }
}
