#import "RNHKHealthStore.h"

@interface RNHKHealthStore()
@property(nonatomic, strong) HKHealthStore *store;
@end

@implementation RNHKHealthStore

+ (instancetype)sharedInstance {
    static SomeSharedClass *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}

- (instancetype)init {
    if ((self = [super init])) {
        self.store = [[HKHealthStore alloc] init];
    }
    return self;
}

@end

