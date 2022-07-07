#import <Foundation/Foundation.h>

@interface RNHealthierObservationQueue : NSObject

+ (RNHealthierObservationQueue *)sharedInstance;

- (void)enqueue:(NSString *)dataTypeIdentifier observationUUID:(NSUUID *)observationUUID completionHandler:(void(^)(void))completionHandler;

- (id)dequeue;

@end
