import { NativeEventEmitter, NativeModule, NativeModules } from 'react-native';

// TODO: Fix this.listeners so it works as a class?

interface NativeObservationEmitter extends NativeModule {
  finish: (dataTypeIdentifier: DataTypeIdentifier) => void;
}

type DataTypeIdentifier = string; // TODO: real type

type ObservationEvent = {
  dataTypeIdentifier: DataTypeIdentifier;
  observationUUID: string;
};

type ObservationHandler = (
  dataTypeIdentifier: DataTypeIdentifier
) => Promise<void> | void;

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
        const { dataTypeIdentifier, observationUUID } = event;
        const handler = listeners[dataTypeIdentifier];
        if (handler) {
          await handler(dataTypeIdentifier);
        }
        NativeObservationEmitter.finish(observationUUID);
      },
      this
    );
    return () => nativeSubscription.remove();
  }
}

export default new ObservationEmitter();
