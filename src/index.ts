import { Settings } from 'react-native';
import ObservationEmitter from './ObservationEmitter';

import * as Query from './Query';

import NativeHealthier from './NativeHealthier';

export default NativeHealthier;

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
export { default as UpdateFrequency } from './constants/UpdateFrequency';

// Ignite Constants
export { default as HKSystem } from './systems/HK';
export { default as LOINCSystem } from './systems/LOINC';
export { default as UCOMSystem } from './systems/UCOM';

// Background Observers
export const setObserver = ObservationEmitter.setObserver;
export const observe = ObservationEmitter.observe;

export function getBackgroundDeliverableTypes() {
  return Settings.get('RNHealthier_BackgroundDelivery');
}
