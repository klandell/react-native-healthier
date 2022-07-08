#import "RNHealthierBackgroundObserver.h"
#import "RNHealthierObservationEmitter.h"
#import "RNHealthierModule-Swift.h"

@implementation RNHealthierBackgroundObserver

- (void)initObservers {
    RNHealthierObservationEmitter *emitter = [RNHealthierObservationEmitter allocWithZone:nil];
    NSArray* backgroundDelivery = [NSArray arrayWithArray:[[NSUserDefaults standardUserDefaults] objectForKey:@"RNHealthier_BackgroundDelivery"]];
    RNHealthierStore *store = [RNHealthierStore sharedInstance];
    
    for (NSString *dataTypeIdentifierString in backgroundDelivery) {
        [store observe:dataTypeIdentifierString completion:^(HKObserverQueryCompletionHandler _Nonnull completionHandler, NSError * _Nullable error) {
            if (!error) {
                NSUUID *uuid = [NSUUID UUID];
                [emitter notifyOfHKObservation:dataTypeIdentifierString observationUUID:uuid completionHandler:completionHandler];
            } else {
                completionHandler();
            }
        }];
  
        // TODO: DON'T USE IMMEDIATE!, GET IT FROM USER DEFAULTS!!
        [store enableBackgroundDelivery:dataTypeIdentifierString updateFrequencyString:@"IMMEDIATE" completion:^(BOOL success, NSError * _Nullable error) {
            // TODO: IMPLEMENT ME!
        }];
    }
}

@end

