import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
  NativeModule,
} from 'react-native';

interface ObservationEmitter extends NativeModule {
  notifyReady: (ready: boolean) => void;
  finish: () => void;
}

type BackgroundObserverDataEvent = { data: any };

type DataHandler = (data: any) => Promise<void> | void;

const ObservationEmitter =
  NativeModules.RNHeathierObservationEmitter as ObservationEmitter;
const eventEmitter = new NativeEventEmitter(ObservationEmitter);

class BackgroundObserver {
  ready: boolean = false;
  subscription: EmitterSubscription | undefined;

  subscribe(handler: DataHandler) {
    this.subscription = eventEmitter.addListener(
      'onData',
      async (event: BackgroundObserverDataEvent) => {
        await handler(event);
        ObservationEmitter.finish();
      },
      this
    );
    if (!this.ready) {
      ObservationEmitter.notifyReady(true);
      this.ready = true;
    }
  }

  unsubscribe() {
    this.subscription?.remove();
  }
}

export default new BackgroundObserver();
