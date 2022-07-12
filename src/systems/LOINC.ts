import type { Code, ValueOf } from '../types';
import type QuantityTypeIdentifier from '../constants/QuantityTypeIdentifier';

export const LOINCSystemURI = 'http://loinc.org';

type LoincMap = {
  [K in ValueOf<typeof QuantityTypeIdentifier>]?:
    | Readonly<Code>
    | ReadonlyArray<Code>;
};

const LOINC: LoincMap = {
  ActiveEnergyBurned: {
    code: '41981-2',
    display: 'Calories burned',
  },
  BloodGlucose: {
    code: '2339-0',
    display: 'Glucose [Mass/volume] in Blood',
  },
  BloodPressureDiastolic: {
    code: '8462-4',
    display: 'Diastolic blood pressure',
  },
  BloodPressureSystolic: {
    code: '8480-6',
    display: 'Systolic blood pressure',
  },
  DietaryEnergyConsumed: {
    code: '9052-2',
    display: 'Calorie intake total',
  },
  HeartRate: {
    code: '8867-4',
    display: 'Heart rate',
  },
  HeartRateVariabilitySDNN: {
    code: '80404-7',
    display: 'R-R interval.standard deviation (Heart rate variability)',
  },
  OxygenSaturation: [
    {
      code: '2708-6',
      display: 'Oxygen saturation in Arterial blood',
    },
    {
      code: '59408-5',
      display: 'Oxygen saturation in Arterial blood by Pulse oximetry',
    },
  ],
  RestingHeartRate: {
    code: '40443-4',
    display: 'Heart rate --resting',
  },
  StepCount: {
    code: '55423-8',
    display: 'Number of steps',
  },
} as const;

export default LOINC;
