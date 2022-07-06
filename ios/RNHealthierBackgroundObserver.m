// https://gist.github.com/phatblat/654ab2b3a135edf905f4a854fdb2d7c8

#import "RNHealthierBackgroundObserver.h"
#import "RNHealthierObservationEmitter.h"
#import "RNHealthierModule-Swift.h"

@implementation RNHealthierBackgroundObserver

- (void)initObservers {
    RNHealthierObservationEmitter *emitter = [RNHealthierObservationEmitter allocWithZone: nil];
    
    NSArray* backgroundDelivery = [NSArray arrayWithArray:[[NSUserDefaults standardUserDefaults] objectForKey:@"RNHealthier_BackgroundDelivery"]];

    RNHealthierStore *store = [RNHealthierStore sharedInstance];
    
    for (NSString *dataTypeIdentifierString in backgroundDelivery) {
        [store observe:dataTypeIdentifierString completion:^(HKObserverQueryCompletionHandler _Nonnull completionHandler, NSError * _Nullable error) {
            NSLog(@"======= EMIT");
            [emitter notifyOfHKObservation:dataTypeIdentifierString completionHandler:completionHandler];
        }];
  
        // TODO: DON'T USE IMMEDIATE!, GET IT FROM USER DEFAULTS!
        [store enableBackgroundDelivery:dataTypeIdentifierString updateFrequencyString:@"IMMEDIATE" completion:^(BOOL success, NSError * _Nullable error) {
            // TODO: IMPLEMENT ME!
            NSLog(@"======= enable backgroungDelivery");
        }];
    }
}

@end

