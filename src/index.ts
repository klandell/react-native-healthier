import { NativeModules, Platform } from 'react-native';
import type { QueryDescriptor } from './Query';

import * as Query from './Query';
import ignite from './ignite';
import BackgroundObserver from './BackgroundObserver';

/*
 WARN  Module RNHealthierObservationEmitter requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.
 */

// TODO: RESULT TYPES

interface Healthier {
  isAvailable: () => Promise<boolean>;
  supportsHealthRecords: () => Promise<boolean>;
  requestAuthorization: (permissions: {
    toShare?: string[];
    read?: string[];
  }) => Promise<void>;
  execute: (query: QueryDescriptor) => Promise<any>;
  observe: (query: QueryDescriptor) => Promise<string>;
  unobserve: (queryId: string) => Promise<void>;
  unobserveAll: () => Promise<void>;
}

const LINKING_ERROR =
  `The package 'react-native-healthier' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export default (NativeModules.RNHealthierModule
  ? NativeModules.RNHealthierModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    )) as Healthier;

export { BackgroundObserver, Query, ignite };
export { default as DataTypeIdentifier } from './constants/DataTypeIdentifier';
