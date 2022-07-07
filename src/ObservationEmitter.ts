import { NativeEventEmitter, NativeModule, NativeModules } from 'react-native';

// TODO: Fix this.listeners so it works as a class?

interface NativeObservationEmitter extends NativeModule {
  finish: (dataTypeIdentifier: DataTypeIdentifier) => void;
}

type DataTypeIdentifier = string; // TODO: real type
type ObservationEvent = DataTypeIdentifier; // TODO: real type
type ObservationHandler = (event: ObservationEvent) => Promise<void> | void;

const NativeObservationEmitter = NativeModules.RNHealthierObservationEmitter;
const emitter = new NativeEventEmitter(NativeObservationEmitter);

const listeners: { [key: DataTypeIdentifier]: ObservationHandler } = {};

class ObservationEmitter {
  setObserver(
    dataTypeIdentifier: DataTypeIdentifier,
    handler: ObservationHandler
  ) {
    listeners[dataTypeIdentifier] = handler;
    return () => {
      delete listeners[dataTypeIdentifier];
    };
  }

  observe() {
    const nativeSubscription = emitter.addListener(
      'RNHealthier_onObservation',
      async (event: ObservationEvent) => {
        const handler = listeners[event];
        console.log('LISTENER CALLED');
        if (handler) {
          await handler(event);
        }
        console.log('FINISH CALLING');
        NativeObservationEmitter.finish(event);
        console.log('FINISH CALLED');
      },
      this
    );
    return () => nativeSubscription.remove();
  }
}

export default new ObservationEmitter();
