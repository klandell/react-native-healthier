#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

typedef void(^CompletionHandler)(void);

@interface RNHealthierObservationEmitter : NSObject

@property(nonatomic, weak) RCTBridge *bridge;

+ (RNHealthierObservationEmitter *)shared;

- (void)invalidate;

- (void)addListener:(NSString *)dataTypeIdentifier;

- (void)removeListeners:(NSString *)dataTypeIdentifier all:(BOOL)all;

- (void)notifyDataAvailable:(NSString *)dataTypeIdentifier onDone:(CompletionHandler)onDone;

- (void)notifyJsReady:(BOOL)ready;
@end
