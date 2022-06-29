#import <HealthKit/HealthKit.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

typedef void(^CompletionHandler)(void);

@interface RNHealthierObservationEmitter : RCTEventEmitter <RCTBridgeModule>

@property CompletionHandler completionHandler;
@property(atomic, assign) BOOL jsReady;
@property(nonatomic, strong) NSMutableArray *queuedDataTypeIdentifiers;

- (void)notifyDataAvailable:(NSString *)dataTypeIdentifier;

- (void)notifyJsReady:(BOOL)ready;

@end
