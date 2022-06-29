#import "RNHealthierObservationEmitter.h"

@interface RNHealthierObservationEmitter ()
@property(atomic, assign) BOOL jsReady;
@property(atomic, assign) NSInteger jsListenerCount;
@property(nonatomic, strong) NSMutableDictionary *jsListeners;
@property(nonatomic, strong) NSMutableArray *queuedObservations;
@property(nonatomic, strong) NSMutableDictionary *observationCompleters;
@property(readonly) BOOL isObserving;
@end

@implementation RNHealthierObservationEmitter

- (void)invalidate {
  self.jsReady = FALSE;
  self.queuedObservations = [NSMutableArray array];
  self.jsListeners = [NSMutableDictionary dictionary];
  self.jsListenerCount = 0;
}

+ (instancetype)shared {
  static dispatch_once_t once;
  static RNHealthierObservationEmitter *sharedInstance;
  dispatch_once(&once, ^{
    sharedInstance = [[RNHealthierObservationEmitter alloc] init];
  });
  return sharedInstance;
}

- (instancetype)init {
  self = [super init];

  if (self) {
    self.jsReady = FALSE;
    self.queuedObservations = [NSMutableArray array];
    self.jsListeners = [NSMutableDictionary dictionary];
  }

  return self;
}

- (void)notifyJsReady:(BOOL)jsReady {
  @synchronized(self.jsListeners) {
    self.jsReady = jsReady;
    if (jsReady) {
      for (id observation in [self.queuedObservations copy]) {
        [self notifyDataAvailable:observation[@"dataTypeIdentifier"] onDone:observation[@"onDone"]];
        @synchronized(self.queuedObservations) {
          [self.queuedObservations removeObject:observation];
        }
      }
    }
  }
}

- (void)notifyDataAvailable:(NSString *)dataTypeIdentifier onDone:(CompletionHandler)onDone {
  @synchronized(self.jsListeners) {
    if (self.bridge && self.isObserving && self.jsListeners[dataTypeIdentifier] != nil) {
        NSString *eventName = [@"rnhealthier_" stringByAppendingString:dataTypeIdentifier];
        
        @synchronized(self.observationCompleters) {
            self.observationCompleters[dataTypeIdentifier] = onDone;
        }
        
        [self.bridge enqueueJSCall:@"RCTDeviceEventEmitter"
                          method:@"emit"
                            args:@[ eventName ]
                      completion:NULL];
    } else {
      @synchronized(self.queuedObservations) {
        [self.queuedObservations
         addObject:@{@"dataTypeIdentifier" : dataTypeIdentifier, @"onDone" : onDone}];
      }
    }
  }
}

- (void)dataHandled:(NSString *)dataTypeIdentifier {
    @synchronized(self.observationCompleters) {
        CompletionHandler onDone = self.observationCompleters[dataTypeIdentifier];
        if (onDone != nil) {
            onDone();
            @synchronized(self.observationCompleters) {
              [self.observationCompleters removeObjectForKey:dataTypeIdentifier];
            }
        }
    }
}

- (void)addListener:(NSString *)dataTypeIdentifier {
  @synchronized(self.jsListeners) {
    self.jsListenerCount++;

    if (self.jsListeners[dataTypeIdentifier] == nil) {
      self.jsListeners[dataTypeIdentifier] = @([@1 integerValue]);
    } else {
      self.jsListeners[dataTypeIdentifier] =
          @([self.jsListeners[dataTypeIdentifier] integerValue] + [@1 integerValue]);
    }

    for (id observation in [self.queuedObservations copy]) {
      if ([observation[@"dataTypeIdentifier"] isEqualToString:dataTypeIdentifier]) {
        [self notifyDataAvailable:observation[@"dataTypeIdentifier"] onDone:observation[@"onDone"]];
        @synchronized(self.queuedObservations) {
          [self.queuedObservations removeObject:observation];
        }
      }
    }
  }
}

- (void)removeListeners:(NSString *)dataTypeIdentifier all:(BOOL)all {
  @synchronized(self.jsListeners) {
    if (self.jsListeners[dataTypeIdentifier] != nil) {
      NSInteger listenersForDataType = [self.jsListeners[dataTypeIdentifier] integerValue];

      if (listenersForDataType <= 1 || all) {
        @synchronized(self.jsListeners) {
          [self.jsListeners removeObjectForKey:dataTypeIdentifier];
        }
      } else {
        @synchronized(self.jsListeners) {
          self.jsListeners[dataTypeIdentifier] =
              @([self.jsListeners[dataTypeIdentifier] integerValue] - [@1 integerValue]);
        }
      }

      if (all) {
        self.jsListenerCount = self.jsListenerCount - listenersForDataType;
      } else {
        self.jsListenerCount = self.jsListenerCount - [@1 integerValue];
      }
    }
  }
}

- (BOOL)isObserving {
  return self.jsReady && self.jsListenerCount > 0;
}

@end
