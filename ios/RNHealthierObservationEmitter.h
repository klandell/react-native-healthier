#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RNHealthierObservationEmitter: RCTEventEmitter <RCTBridgeModule>

- (void)notifyOfHKObservation:(NSString *)dataTypeIdentifier
              observationUUID:(NSUUID *)observationUUID
            completionHandler:(void(^)(void))completionHandler;

@end
