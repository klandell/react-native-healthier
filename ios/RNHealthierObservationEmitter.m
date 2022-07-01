#import "RNHealthierObservationEmitter.h"

NSString *const HKObservationEvent = @"RNHealthier_onObservation";
bool hasListeners = NO;

@interface RNHealthierObservationEmitter()
@property(nonatomic, strong) NSMutableArray *hkObservationQueue;
@property(nonatomic, strong) NSMutableDictionary *completerMap;
@end

@implementation RNHealthierObservationEmitter

RCT_EXPORT_MODULE();

+ (id)allocWithZone:(NSZone *)zone {
    static RNHealthierObservationEmitter *sharedInstance = nil;
    static dispatch_once_t once;
    dispatch_once(&once, ^{
        sharedInstance = [super allocWithZone:zone];
    });
    return sharedInstance;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        self.hkObservationQueue = [NSMutableArray array];
        self.completerMap = [NSMutableDictionary dictionary];
    }
    return self;
}

- (void)startObserving {
    hasListeners = YES;
    
    @synchronized(self.hkObservationQueue) {
        for (id observation in [self.hkObservationQueue copy]) {
            [self notifyOfHKObservation:observation[@"dataTypeIdentifier"] completionHandler:observation[@"completionHandler"]];
            @synchronized(self.hkObservationQueue) {
                [self.hkObservationQueue removeObject:observation];
            }
        }
    }
}

- (void)stopObserving {
    hasListeners = NO;
}

- (NSArray<NSString *> *)supportedEvents {
    return @[HKObservationEvent];
}

- (void)notifyOfHKObservation:(NSString *)dataTypeIdentifier completionHandler:(void(^)(void))completionHandler {
    if (hasListeners) {
        @synchronized(self.completerMap) {
            self.completerMap[dataTypeIdentifier] = completionHandler;
        }
        [self sendEventWithName:HKObservationEvent body:dataTypeIdentifier];
    } else {
        @synchronized(self.hkObservationQueue) {
            [self.hkObservationQueue addObject:@{
                @"dataTypeIdentifier": dataTypeIdentifier,
                @"completionHandler" : completionHandler
            }];
        }
    }
}

RCT_EXPORT_METHOD(finish:(NSString *)dataTypeIdentifier) {
    @synchronized(self.completerMap) {
        void(^completionHandler)(void) = self.completerMap[dataTypeIdentifier];
        if (completionHandler != nil) {
            completionHandler();
            [self.completerMap removeObjectForKey:dataTypeIdentifier];
        }
    }
}

@end
