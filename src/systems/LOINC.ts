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
  BodyFatPercentage: {
    code: '41982-0',
    display: 'Percentage of body fat Measured',
  },
  BodyMass: {
    code: '29463-7',
    display: 'Body weight',
  },
  BodyMassIndex: {
    code: '39156-5',
    display: 'Body mass index (BMI) [Ratio]',
  },
  BodyTemperature: {
    code: '8310-5',
    display: 'Body temperature',
  },
  DietaryEnergyConsumed: {
    code: '9052-2',
    display: 'Calorie intake total',
  },
  DistanceCycling: {
    code: '93818-3',
    display: 'Cycling distance unspecified time',
  },
  DistanceSwimming: {
    code: '93816-7',
    display: 'Swimming distance unspecified time',
  },
  ForcedExpiratoryVolume1: {
    code: '20150-9',
    display: 'FEV1',
  },
  ForcedVitalCapacity: {
    code: '19870-5',
    display: 'Forced vital capacity [Volume] Respiratory system',
  },
  HeartRate: {
    code: '8867-4',
    display: 'Heart rate',
  },
  HeartRateVariabilitySDNN: {
    code: '80404-7',
    display: 'R-R interval.standard deviation (Heart rate variability)',
  },
  Height: {
    code: '8302-2',
    display: 'Body height',
  },
  LeanBodyMass: {
    code: '91557-9',
    display: 'Lean body weight',
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
  PeakExpiratoryFlowRate: {
    code: '33452-4',
    display: 'Maximum expiratory gas flow Respiratory system airway',
  },
  PeripheralPerfusionIndex: {
    code: '61006-3',
    display: 'Perfusion index Tissue by Pulse oximetry',
  },
  RespiratoryRate: {
    code: '9279-1',
    display: 'Respiratory rate',
  },
  RestingHeartRate: {
    code: '40443-4',
    display: 'Heart rate --resting',
  },
  SixMinuteWalkTestDistance: {
    code: '64098-7',
    display: 'Six minute walk test',
  },
  StepCount: {
    code: '55423-8',
    display: 'Number of steps',
  },
  Vo2Max: {
    code: '94122-9',
    display:
      'Oxygen consumption (VO2)/Body weight [Volume Rate Content] --peak during exercise',
  },
  WaistCircumference: {
    code: '8280-0',
    display: 'Waist Circumference at umbilicus by Tape measure',
  },
} as const;

export default LOINC;
