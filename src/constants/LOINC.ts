import type { Code } from '../types';
import type { QuantityTypeIdentifier } from './TypeIdentifier';

export const LOINCSystemURI = 'http://loinc.org';

const LOINC: {
  [K in keyof typeof QuantityTypeIdentifier]?:
    | Readonly<Code>
    | ReadonlyArray<Code>;
} = {
  ActiveEnergyBurned: {
    code: '41981-2',
    display: 'Calories burned',
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
