#import "RNHealthierObservationQueue.h"

@interface RNHealthierObservationQueue()
@property(nonatomic, strong) NSMutableArray *queue;
@end

@implementation RNHealthierObservationQueue

+ (instancetype)sharedInstance {
    static RNHealthierObservationQueue *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        self.queue = [NSMutableArray array];
    }
    return self;
}

- (void)enqueue:(NSString *)dataTypeIdentifier completionHandler:(void(^)(void))completionHandler {
    @synchronized(self.queue) {
        [self.queue addObject:@{
            @"dataTypeIdentifier": dataTypeIdentifier,
            @"completionHandler" : completionHandler
        }];
    }
}

- (id)dequeue {
    @synchronized(self.queue) {
        id obj = [self.queue lastObject];
        [self.queue removeLastObject];
        return obj;
    }
}

@end
