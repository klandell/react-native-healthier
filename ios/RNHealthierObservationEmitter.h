#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RNHealthierObservationEmitter: RCTEventEmitter <RCTBridgeModule>

- (void)notifyOfHKObservation:(NSString *)dataTypeIdentifier completionHandler:(void(^)(void))completionHandler;

@end
