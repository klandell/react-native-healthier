// https://gist.github.com/phatblat/654ab2b3a135edf905f4a854fdb2d7c8
// https://github.com/CocoaPods/CocoaPods/issues/10544

#import "RNHealthierBackgroundObserver.h"
#import "RNHealthierObservationEmitter.h"
#import "RNHKHealthStore.h"

@implementation RNHealthierBackgroundObserver

- (void)initObservers {
    RNHealthierObservationEmitter *emitter = [RNHealthierObservationEmitter allocWithZone:nil];
    
    NSArray* backgroundDelivery = [NSArray arrayWithArray:[[NSUserDefaults standardUserDefaults] objectForKey:@"RNHealthier_BackgroundDelivery"]];
    
    RNHKHealthStore *rnHKStore = [RNHKHealthStore sharedInstance];
    
    for (NSString *dataTypeIdentifierString in backgroundDelivery) {
        
    }
    /*
    for (NSString *dataTypeIdentifierString in backgroundDelivery) {
        [RNHealthierStore.shared observe:dataTypeIdentifierString completion:^(HKObserverQueryCompletionHandler _Nonnull completionHandler, NSError * _Nullable error) {
            NSLog(@"======= EMIT");
            [emitter notifyOfHKObservation:dataTypeIdentifierString completionHandler:completionHandler];
        }];
  
        // TODO: DON'T USE IMMEDIATE!, GET IT FROM USER DEFAULTS!
        [RNHealthierStore.shared enableBackgroundDelivery:dataTypeIdentifierString updateFrequencyString:@"IMMEDIATE" completion:^(BOOL success, NSError * _Nullable error) {
            // TODO: IMPLEMENT ME!
            NSLog(@"======= enable backgroungDelivery");
        }];
    }
     */
}

@end

