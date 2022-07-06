#import <Foundation/Foundation.h>
#import <HealthKit/HealthKit.h>

@interface RNHKHealthStore : NSObject

+(RNHKHealthStore *)sharedInstance;

- (instancetype)init NS_DESIGNATED_INITIALIZER;

@end
