import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModule,
  NativeModules,
} from 'react-native';

interface NativeObservationEmitter extends NativeModule {
  finish: (dataTypeIdentifier: string) => void; // TODO: Type
}

type ObservationEvent = string; // TODO: type, make object
type ObservationHandler = (event: ObservationEvent) => Promise<void> | void;

const NativeObservationEmitter = NativeModules.RNHealthierObservationEmitter;
const emitter = new NativeEventEmitter(NativeObservationEmitter);

class ObservationEmitter {
  ready: boolean = false;
  subscription: EmitterSubscription | undefined;

  subscribe(handler: ObservationHandler) {
    this.subscription = emitter.addListener(
      'RNHealthier_onObservation',
      async (event: ObservationEvent) => {
        await handler(event);
        NativeObservationEmitter.finish();
      },
      this
    );
  }

  unsubscribe() {
    this.subscription?.remove();
  }
}

export default new ObservationEmitter();
