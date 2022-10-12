import { Settings } from 'react-native';
import ObservationEmitter from './ObservationEmitter';

import * as Query from './Query';

import NativeHealthier from './NativeHealthier';
import type { ValueOf } from './types';

import type UpdateFrequency from './constants/UpdateFrequency';

export default NativeHealthier;

// Healthier functions and function groups.
export { Query };
export { default as ignite } from './lib/ignite';
export { default as waterfall } from './lib/waterfall';

// Data Type Identifiers
export { default as CategoryTypeIdentifier } from './constants/CategoryTypeIdentifier';
export { default as CharacteristicTypeIdentifier } from './constants/CharacteristicTypeIdentifier';
export { default as ClinicalTypeIdentifier } from './constants/ClinicalTypeIdentifier';
export { default as CorrelationTypeIdentifier } from './constants/CorrelationTypeIdentifier';
export { default as QuantityTypeIdentifier } from './constants/QuantityTypeIdentifier';
export { default as SeriesSampleIdentifier } from './constants/SeriesSampleIdentifier';
export { default as WorkoutTypeIdentifer } from './constants/WorkoutTypeIdentifer';

export { default as TypeIdentiferLabels } from './constants/TypeIdentifierLabels';

// Category Values
export { default as CategoryValue } from './constants/CategoryValue';
export { default as CategoryValueAppetiteChanges } from './constants/CategoryValueAppetiteChanges';
export { default as CategoryValueAppleStandHour } from './constants/CategoryValueAppleStandHour';
export { default as CategoryValueAppleWalkingSteadinessEvent } from './constants/CategoryValueAppleWalkingSteadinessEvent';
export { default as CategoryValueCervicalMucusQuality } from './constants/CategoryValueCervicalMucusQuality';
export { default as CategoryValueContraceptive } from './constants/CategoryValueContraceptive';
export { default as CategoryValueEnvironmentalAudioExposureEvent } from './constants/CategoryValueEnvironmentalAudioExposureEvent';
export { default as CategoryValueHeadphoneAudioExposureEvent } from './constants/CategoryValueHeadphoneAudioExposureEvent';
export { default as CategoryValueLowCardioFitnessEvent } from './constants/CategoryValueLowCardioFitnessEvent';
export { default as CategoryValueMenstrualFlow } from './constants/CategoryValueMenstrualFlow';
export { default as CategoryValueOvulationTestResult } from './constants/CategoryValueOvulationTestResult';
export { default as CategoryValuePregnancyTestResult } from './constants/CategoryValuePregnancyTestResult';
export { default as CategoryValuePresence } from './constants/CategoryValuePresence';
export { default as CategoryValueProgesteroneTestResult } from './constants/CategoryValueProgesteroneTestResult';
export { default as CategoryValueSeverity } from './constants/CategoryValueSeverity';
export { default as CategoryValueSleepAnalysis } from './constants/CategoryValueSleepAnalysis';

// Characteristic Values
export { default as ActivityMoveMode } from './constants/ActivityMoveMode';
export { default as BiologicalSex } from './constants/BiologicalSex';
export { default as BloodType } from './constants/BloodType';
export { default as FitzpatrickSkinType } from './constants/FitzpatrickSkinType';
export { default as WheelchairUse } from './constants/WheelchairUse';

// Electocardiogram Values
export { default as ElectrocardiogramAlgorithmVersion } from './constants/ElectrocardiogramAlgorithmVersion';
export { default as ElectrocardiogramClassification } from './constants/ElectrocardiogramClassification';

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

// TODO: TYPE!
export function auditBackgroundDelivery(): {
  sampleType: string;
  updateFrequency: ValueOf<typeof UpdateFrequency>;
}[] {
  const deliveryStrings = Settings.get('RNHealthier_BackgroundDelivery') || [];
  return deliveryStrings.map((descriptor: string) => {
    const [sampleType, updateFrequency] = descriptor.split('::');
    return { sampleType, updateFrequency: +updateFrequency };
  });
}
