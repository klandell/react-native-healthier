import { NativeEventEmitter, NativeModule, NativeModules } from 'react-native';

// TODO: LISTENERS ON THIS NOT WORKING

interface NativeObservationEmitter extends NativeModule {
  finish: (dataTypeIdentifier: DataTypeIdentifier) => void;
}

type DataTypeIdentifier = string; // TODO: real type
type ObservationEvent = DataTypeIdentifier; // TODO: real type
type ObservationHandler = (event: ObservationEvent) => Promise<void> | void;

const NativeObservationEmitter = NativeModules.RNHealthierObservationEmitter;
const emitter = new NativeEventEmitter(NativeObservationEmitter);

class ObservationEmitter {
  listeners: { [key: DataTypeIdentifier]: ObservationHandler } = {};

  setObserver(
    dataTypeIdentifier: DataTypeIdentifier,
    handler: ObservationHandler
  ) {
    this.listeners[dataTypeIdentifier] = handler;
    return () => {
      delete this.listeners[dataTypeIdentifier];
    };
  }

  observe() {
    const nativeSubscription = emitter.addListener(
      'RNHealthier_onObservation',
      async (event: ObservationEvent) => {
        const handler = this.listeners[event];
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
