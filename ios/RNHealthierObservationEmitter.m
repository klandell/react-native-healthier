#import "RNHealthierObservationEmitter.h"
#import "RNHealthierObservationQueue.h"

NSString *const HKObservationEvent = @"RNHealthier_onObservation";
bool hasListeners = NO;

@interface RNHealthierObservationEmitter()
@property(nonatomic, strong) NSMutableDictionary *completerMap;
@end

@implementation RNHealthierObservationEmitter

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
    return NO;
}

+ (id)allocWithZone:(NSZone *)zone {
    static RNHealthierObservationEmitter *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [super allocWithZone:zone];
    });
    return sharedInstance;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        self.completerMap = [NSMutableDictionary dictionary];
    }
    return self;
}

- (void)startObserving {
    hasListeners = YES;
    // Send any pending events
    RNHealthierObservationQueue *queue = [RNHealthierObservationQueue sharedInstance];
    NSDictionary *observation = [queue dequeue];
    while (observation) {
        [self notifyOfHKObservation:observation[@"dataTypeIdentifier"]
                    observationUUID:observation[@"observationUUID"]
                  completionHandler:observation[@"completionHandler"]];
        observation = [queue dequeue];
    }
}

- (void)stopObserving {
    hasListeners = NO;
}

- (NSArray<NSString *> *)supportedEvents {
    return @[HKObservationEvent];
}

- (void)notifyOfHKObservation:(NSString *)dataTypeIdentifier
              observationUUID:(NSUUID *)observationUUID
            completionHandler:(void(^)(void))completionHandler {
    if (hasListeners) {
        NSString *observationUUIDString = [observationUUID UUIDString];
        
        @synchronized(self.completerMap) {
            self.completerMap[observationUUIDString] = completionHandler;
        }
        
        [self sendEventWithName:HKObservationEvent body:@{
            @"dataTypeIdentifier": dataTypeIdentifier,
            @"observationUUID" : observationUUIDString,
        }];
    } else {
        RNHealthierObservationQueue *queue = [RNHealthierObservationQueue sharedInstance];
        [queue enqueue:dataTypeIdentifier observationUUID:observationUUID completionHandler:completionHandler];
    }
}

RCT_EXPORT_METHOD(finish:(NSString *)observationUUIDString) {
    @synchronized(self.completerMap) {
        void(^completionHandler)(void) = self.completerMap[observationUUIDString];
        if (completionHandler != nil) {
            completionHandler();
            [self.completerMap removeObjectForKey:observationUUIDString];
        }
    }
}

@end
