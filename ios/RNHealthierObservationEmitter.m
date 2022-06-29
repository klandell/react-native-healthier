#import "RNHealthierObservationEmitter.h"

bool hasListeners = NO;

/*
@interface RNHealthierEventEmitter()
@property CompletionHandler completionHandler;
@property(atomic, assign) BOOL jsReady;
@property(nonatomic, strong) NSMutableArray *queuedData;
@end
 */

@implementation RNHealthierObservationEmitter

RCT_EXPORT_MODULE();

// Required React Native Setup.
- (BOOL) requiresMainQueueSetup {
    return false;
}

- (instancetype)init {
  self = [super init];
  if (self) {
    self.jsReady = FALSE;
    self.queuedDataTypeIdentifiers = [NSMutableArray array];
  }
  return self;
}

- (void)invalidate {
  self.jsReady = FALSE;
  self.queuedDataTypeIdentifiers = [NSMutableArray array];
  [super invalidate];
}

- (void)startObserving {
  hasListeners = YES;
}

- (void)stopObserving {
  hasListeners = NO;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"onData"];
}

- (void)notifyJsReady:(BOOL)jsReady {
  self.jsReady = jsReady;
  if (jsReady) {
    for (id d in [self.queuedDataTypeIdentifiers copy]) {
      [self notifyDataAvailable:d];
      [self.queuedDataTypeIdentifiers removeObject:d];
    }
  }
}

- (void)notifyDataAvailable:(NSString *)dataTypeIdentifier {
  if (hasListeners) {
    [self sendEventWithName:@"onData" body:dataTypeIdentifier];
  } else {
    [self.queuedDataTypeIdentifiers addObject:dataTypeIdentifier];
  }
}

RCT_EXPORT_METHOD(notifyReady: (BOOL)ready) {
  [self notifyJsReady:ready];
}


RCT_EXPORT_METHOD(finish) {
  if (self.completionHandler != nil) {
    [self completionHandler];
  }
}

@end
