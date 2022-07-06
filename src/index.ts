import { NativeModules, Platform, Settings } from 'react-native';
import ObservationEmitter from './ObservationEmitter';
import type { QueryDescriptor } from './Query';

import * as Query from './Query';

// TODO: RESULT TYPES

interface Healthier {
  isAvailable: () => Promise<boolean>;
  supportsHealthRecords: () => Promise<boolean>;
  requestAuthorization: (permissions: {
    toShare?: string[]; // TODO: Type
    read?: string[]; // TODO: Type
  }) => Promise<void>;
  execute: (query: QueryDescriptor) => Promise<any>;
  enableBackgroundDelivery: (dataTypeIdentifier: string) => Promise<void>; // TODO: Type
  disableBackgroundDelivery: (dataTypeIdentifier: string) => Promise<void>; // TODO: Type
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

// Healthier functions and function groups.
export { Query };
export { default as ignite } from './ignite';

// Data Type Identifiers
export { default as CategoryTypeIdentifier } from './constants/CategoryTypeIdentifier';
export { default as CharacteristicTypeIdentifier } from './constants/CharacteristicTypeIdentifier';
export { default as ClinicalTypeIdentifier } from './constants/ClinicalTypeIdentifier';
export { default as CorrelationTypeIdentifier } from './constants/CorrelationTypeIdentifier';
export { default as QuantityTypeIdentifier } from './constants/QuantityTypeIdentifier';
export { default as SeriesSampleIdentifier } from './constants/SeriesSampleIdentifier';
export { default as WorkoutTypeIdentifer } from './constants/WorkoutTypeIdentifer';

// Other HealthKit Constants
export { default as ComparisonOperator } from './constants/ComparisonOperator';
export { default as DeviceProperty } from './constants/DeviceProperty';
export { default as MetadataKey } from './constants/MetadataKey';
export { default as SortIdentifier } from './constants/SortIdentifier';

// Ignite Constants
export { default as HKSystem } from './systems/HK';
export { default as LOINCSystem } from './systems/LOINC';
export { default as UCOMSystem } from './systems/UCOM';

// TODO: type
export function observe(
  dataTypeIdentifier: string,
  handler: () => Promise<void>
) {
  ObservationEmitter.observe(dataTypeIdentifier, handler);
}

export function getBackgroundDeliverableTypes() {
  return Settings.get('RNHealthier_BackgroundDelivery');
}
