import { NativeModules, Platform } from 'react-native';
import type { Query } from './Query';

interface HealthierStore extends NativeModule {
  isAvailable: () => Promise<boolean>;
  supportsHealthRecords: () => Promise<boolean>;
  requestAuthorization: (permissions: {
    toShare?: string[];
    read?: string[];
  }) => Promise<void>;
  execute: (query: Query) => Promise<any>;
  observe: (query: Query) => Promise<string>;
  unobserve: (queryId: string) => Promise<void>;
  unobserveAll: () => Promise<void>;
}

const LINKING_ERROR =
  `The package 'react-native-healthier' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export default (NativeModules.Healthier
  ? NativeModules.Healthier
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    )) as HealthierStore;

export * as Query from './Query';
export * as iqnite from './ignite';

export { default as TypeIdentifier } from './constants/TypeIdentifier';
