import type { Code, ValueOf } from '../types';
import type CategoryTypeIdentifier from '../constants/CategoryTypeIdentifier';
import type QuantityTypeIdentifier from '../constants/QuantityTypeIdentifier';
import type CorrelationTypeIdentifier from '../constants/CorrelationTypeIdentifier';
import type CharacteristicTypeIdentifier from '../constants/CharacteristicTypeIdentifier';
import type SeriesSampleIdentifier from '../constants/SeriesSampleIdentifier';

import type ClinicalTypeIdentifier from '../constants/ClinicalTypeIdentifier';

export const HKSystemURI = 'com.apple.health';

type HKCategoryMap = {
  [K in ValueOf<typeof CategoryTypeIdentifier>]?: Readonly<Code>;
};

const HKCategory: HKCategoryMap = {
  AbdominalCramps: {
    code: 'HKCategoryTypeIdentifierAbdominalCramps',
    display: 'Abdominal Cramps',
  },
  Acne: {
    code: 'HKCategoryTypeIdentifierAcne',
    display: 'Acne',
  },
  AppetiteChanges: {
    code: 'HKCategoryTypeIdentifierAppetiteChanges',
    display: 'Appetite Changes',
  },
  AppleStandHour: {
    code: 'HKCategoryTypeIdentifierAppleStandHour',
    display: 'Apple Stand Hour',
  },
  AppleWalkingSteadinessEvent: {
    code: 'HKCategoryTypeIdentifierAppleWalkingSteadinessEvent',
    display: 'Apple Walking Steadiness Event',
  },
  BladderIncontinence: {
    code: 'HKCategoryTypeIdentifierBladderIncontinence',
    display: 'Bladder Incontinence',
  },
  Bloating: {
    code: 'HKCategoryTypeIdentifierBloating',
    display: 'Bloating',
  },
  BreastPain: {
    code: 'HKCategoryTypeIdentifierBreastPain',
    display: 'Breast Pain',
  },
  CervicalMucusQuality: {
    code: 'HKCategoryTypeIdentifierCervicalMucusQuality',
    display: 'Cervical Mucus Quality',
  },
  ChestTightnessOrPain: {
    code: 'HKCategoryTypeIdentifierChestTightnessOrPain',
    display: 'Chest Tightness Or Pain',
  },
  Chills: {
    code: 'HKCategoryTypeIdentifierChills',
    display: 'Chills',
  },
  Constipation: {
    code: 'HKCategoryTypeIdentifierConstipation',
    display: 'Constipation',
  },
  Contraceptive: {
    code: 'HKCategoryTypeIdentifierContraceptive',
    display: 'Contraceptive',
  },
  Coughing: {
    code: 'HKCategoryTypeIdentifierCoughing',
    display: 'Coughing',
  },
  Diarrhea: {
    code: 'HKCategoryTypeIdentifierDiarrhea',
    display: 'Diarrhea',
  },
  Dizziness: {
    code: 'HKCategoryTypeIdentifierDizziness',
    display: 'Dizziness',
  },
  DrySkin: {
    code: 'HKCategoryTypeIdentifierDrySkin',
    display: 'Dry Skin',
  },
  EnvironmentalAudioExposureEvent: {
    code: 'HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent',
    display: 'Environmental Audio Exposure Event',
  },
  Fainting: {
    code: 'HKCategoryTypeIdentifierFainting',
    display: 'Fainting',
  },
  Fatigue: {
    code: 'HKCategoryTypeIdentifierFatigue',
    display: 'Fatigue',
  },
  Fever: {
    code: 'HKCategoryTypeIdentifierFever',
    display: 'Fever',
  },
  GeneralizedBodyAche: {
    code: 'HKCategoryTypeIdentifierGeneralizedBodyAche',
    display: 'Generalized Body Ache',
  },
  HairLoss: {
    code: 'HKCategoryTypeIdentifierHairLoss',
    display: 'Hair Loss',
  },
  HandwashingEvent: {
    code: 'HKCategoryTypeIdentifierHandwashingEvent',
    display: 'Handwashing Event',
  },
  Headache: {
    code: 'HKCategoryTypeIdentifierHeadache',
    display: 'Headache',
  },
  HeadphoneAudioExposureEvent: {
    code: 'HKCategoryTypeIdentifierHeadphoneAudioExposureEvent',
    display: 'Headphone Audio Exposure Event',
  },
  Heartburn: {
    code: 'HKCategoryTypeIdentifierHeartburn',
    display: 'Heartburn',
  },
  HighHeartRateEvent: {
    code: 'HKCategoryTypeIdentifierHighHeartRateEvent',
    display: 'High Heart Rate Event',
  },
  InfrequentMenstrualCycles: {
    code: 'HKCategoryTypeIdentifierInfrequentMenstrualCycles',
    display: 'Infrequent Menstrual Cycle',
  },
  IntermenstrualBleeding: {
    code: 'HKCategoryTypeIdentifierIntermenstrualBleeding',
    display: 'Intermenstrual Bleeding',
  },
  IrregularHeartRhythmEvent: {
    code: 'HKCategoryTypeIdentifierIrregularHeartRhythmEvent',
    display: 'Irregular Heart Rhythm Event',
  },
  IrregularMenstrualCycles: {
    code: 'HKCategoryTypeIdentifierIrregularMenstrualCycles',
    display: 'Irregular Menstrual Cycle',
  },
  Lactation: {
    code: 'HKCategoryTypeIdentifierLactation',
    display: 'Lactation',
  },
  LossOfSmell: {
    code: 'HKCategoryTypeIdentifierLossOfSmell',
    display: 'Los sOf Smell',
  },
  LossOfTaste: {
    code: 'HKCategoryTypeIdentifierLossOfTaste',
    display: 'Loss Of Taste',
  },
  LowCardioFitnessEvent: {
    code: 'HKCategoryTypeIdentifierLowCardioFitnessEvent',
    display: 'Low Cardio Fitness Event',
  },
  LowerBackPain: {
    code: 'HKCategoryTypeIdentifierLowerBackPain',
    display: 'Lower Back Pain',
  },
  LowHeartRateEvent: {
    code: 'HKCategoryTypeIdentifierLowHeartRateEvent',
    display: 'Low Heart Rate Event',
  },
  MemoryLapse: {
    code: 'HKCategoryTypeIdentifierMemoryLapse',
    display: 'Memory Lapse',
  },
  MenstrualFlow: {
    code: 'HKCategoryTypeIdentifierMenstrualFlow',
    display: 'Menstrual Flow',
  },
  MindfulSession: {
    code: 'HKCategoryTypeIdentifierMindfulSession',
    display: 'Mindful Session',
  },
  MoodChanges: {
    code: 'HKCategoryTypeIdentifierMoodChanges',
    display: 'Mood Changes',
  },
  Nausea: {
    code: 'HKCategoryTypeIdentifierNausea',
    display: 'Nausea',
  },
  NightSweats: {
    code: 'HKCategoryTypeIdentifierNightSweats',
    display: 'Night Sweats',
  },
  OvulationTestResult: {
    code: 'HKCategoryTypeIdentifierOvulationTestResult',
    display: 'Ovulation Test Result',
  },
  PelvicPain: {
    code: 'HKCategoryTypeIdentifierPelvicPain',
    display: 'Pelvic Pain',
  },
  PersistentIntermenstrualBleeding: {
    code: 'HKCategoryTypeIdentifierPersistentIntermenstrualBleeding',
    display: 'Persistent Intermenstrual Bleeding',
  },
  Pregnancy: {
    code: 'HKCategoryTypeIdentifierPregnancy',
    display: 'Pregnancy',
  },
  PregnancyTestResult: {
    code: 'HKCategoryTypeIdentifierPregnancyTestResult',
    display: 'Pregnancy Test Result',
  },
  ProgesteroneTestResult: {
    code: 'HKCategoryTypeIdentifierProgesteroneTestResult',
    display: 'Progesterone Test Result',
  },
  ProlongedMenstrualPeriods: {
    code: 'HKCategoryTypeIdentifierProlongedMenstrualPeriods',
    display: 'Prolonged Menstrual Cycle',
  },
  RapidPoundingOrFlutteringHeartbeat: {
    code: 'HKCategoryTypeIdentifierRapidPoundingOrFlutteringHeartbeat',
    display: 'Rapid Pounding Or Fluttering Heartbeat',
  },
  RunnyNose: {
    code: 'HKCategoryTypeIdentifierRunnyNose',
    display: 'Runny Nose',
  },
  SexualActivity: {
    code: 'HKCategoryTypeIdentifierSexualActivity',
    display: 'Sexual Activity',
  },
  ShortnessOfBreath: {
    code: 'HKCategoryTypeIdentifierShortnessOfBreath',
    display: 'Shortness Of Breath',
  },
  SinusCongestion: {
    code: 'HKCategoryTypeIdentifierSinusCongestion',
    display: 'Sinus Congestion',
  },
  SkippedHeartbeat: {
    code: 'HKCategoryTypeIdentifierSkippedHeartbeat',
    display: 'Skipped Heartbeat',
  },
  SleepAnalysis: {
    code: 'HKCategoryTypeIdentifierSleepAnalysis',
    display: 'Sleep Analysis',
  },
  SleepChanges: {
    code: 'HKCategoryTypeIdentifierSleepChanges',
    display: 'Sleep Changes',
  },
  SoreThroat: {
    code: 'HKCategoryTypeIdentifierSoreThroat',
    display: 'Sore Throat',
  },
  ToothbrushingEvent: {
    code: 'HKCategoryTypeIdentifierToothbrushingEvent',
    display: 'Toothbrushing Event',
  },
  VaginalDryness: {
    code: 'HKCategoryTypeIdentifierVaginalDryness',
    display: 'Vaginal Dryness',
  },
  Vomiting: {
    code: 'HKCategoryTypeIdentifierVomiting',
    display: 'Vomiting',
  },
  Wheezing: {
    code: 'HKCategoryTypeIdentifierWheezing',
    display: 'Wheezing',
  },
} as const;

type HKCharacteristicMap = {
  [K in ValueOf<typeof CharacteristicTypeIdentifier>]?: Readonly<Code>;
};

const HKCharacteristic: HKCharacteristicMap = {
  ActivityMoveMode: {
    code: 'HKCharacteristicTypeIdentifierActivityMoveMode',
    display: 'Activity Move Mode',
  },
  BiologicalSex: {
    code: 'HKCharacteristicTypeIdentifierBiologicalSex',
    display: 'Biological Sex',
  },
  BloodType: {
    code: 'HKCharacteristicTypeIdentifierBloodType',
    display: 'Blood Type',
  },
  DateOfBirth: {
    code: 'HKCharacteristicTypeIdentifierDateOfBirth',
    display: 'Date Of Birth',
  },
  FitzpatrickSkinType: {
    code: 'HKCharacteristicTypeIdentifierFitzpatrickSkinType',
    display: 'Fitzpatrick Skin Type',
  },
  WheelchairUse: {
    code: 'HKCharacteristicTypeIdentifierWheelchairUse',
    display: 'Wheelchair Use',
  },
} as const;

type HKClinicalMap = {
  [K in ValueOf<typeof ClinicalTypeIdentifier>]?: Readonly<Code>;
};

const HKClinical: HKClinicalMap = {
  AllergyRecord: {
    code: 'HKClinicalTypeIdentifierAllergyRecord',
    display: 'Allergy Record',
  },
  ConditionRecord: {
    code: 'HKClinicalTypeIdentifierConditionRecord',
    display: 'Condition Record',
  },
  CoverageRecord: {
    code: 'HKClinicalTypeIdentifierCoverageRecord',
    display: 'Coverage Record',
  },
  ImmunizationRecord: {
    code: 'HKClinicalTypeIdentifierImmunizationRecord',
    display: 'Immunization Record',
  },
  LabResultRecord: {
    code: 'HKClinicalTypeIdentifierLabResultRecord',
    display: 'Lab Result Record',
  },
  MedicationRecord: {
    code: 'HKClinicalTypeIdentifierMedicationRecord',
    display: 'Medication Record',
  },
  ProcedureRecord: {
    code: 'HKClinicalTypeIdentifierProcedureRecord',
    display: 'Procedure Record',
  },
  VitalSignRecord: {
    code: 'HKClinicalTypeIdentifierVitalSignRecord',
    display: 'Vital Sign Record',
  },
} as const;

/*
const ClinicalTypeIdentifier = {
  AllergyRecord: 'AllergyRecord',
  ConditionRecord: 'ConditionRecord',
  CoverageRecord: 'CoverageRecord',
  ImmunizationRecord: 'ImmunizationRecord',
  LabResultRecord: 'LabResultRecord',
  MedicationRecord: 'MedicationRecord',
  ProcedureRecord: 'ProcedureRecord',
  VitalSignRecord: 'VitalSignRecord',
} as const;
*/

type HKCorrelationMap = {
  [K in ValueOf<typeof CorrelationTypeIdentifier>]?: Readonly<Code>;
};

const HKCorrelation: HKCorrelationMap = {
  BloodPressure: {
    code: 'HKCorrelationTypeIdentifierBloodPressure',
    display: 'Blood Pressure',
  },
  Food: {
    code: 'HKCorrelationTypeIdentifierFood',
    display: 'Food',
  },
} as const;

type HKQuantityMap = {
  [K in ValueOf<typeof QuantityTypeIdentifier>]?: Readonly<Code>;
};

const HKQuantity: HKQuantityMap = {
  ActiveEnergyBurned: {
    code: 'HKQuantityTypeIdentifierActiveEnergyBurned',
    display: 'Active Energy Burned',
  },
  AppleExerciseTime: {
    code: 'HKQuantityTypeIdentifierAppleExerciseTime',
    display: 'Apple Exercise Time',
  },
  AppleMoveTime: {
    code: 'HKQuantityTypeIdentifierAppleMoveTime',
    display: 'Apple Move Time',
  },
  AppleSleepingWristTemperature: {
    code: 'HKQuantityTypeIdentifierAppleSleepingWristTemperature',
    display: 'Apple Sleeping Wrist Temperature',
  },
  AppleStandTime: {
    code: 'HKQuantityTypeIdentifierAppleStandTime',
    display: 'Apple Stand Time',
  },
  AppleWalkingSteadiness: {
    code: 'HKQuantityTypeIdentifierAppleWalkingSteadiness',
    display: 'Apple Walking Steadiness',
  },
  AtrialFibrillationBurden: {
    code: 'HKQuantityTypeIdentifierAtrialFibrillationBurden',
    display: 'Atrial Fibrillation Burden',
  },
  BasalBodyTemperature: {
    code: 'HKQuantityTypeIdentifierBasalBodyTemperature',
    display: 'Basal Body Temperature',
  },
  BasalEnergyBurned: {
    code: 'HKQuantityTypeIdentifierBasalEnergyBurned',
    display: 'Basal Energy Burned',
  },
  BloodAlcoholContent: {
    code: 'HKQuantityTypeIdentifierBloodAlcoholContent',
    display: 'Blood Alcohol Content',
  },
  BloodGlucose: {
    code: 'HKQuantityTypeIdentifierBloodGlucose',
    display: 'Blood Glucose',
  },
  BloodPressureDiastolic: {
    code: 'HKQuantityTypeIdentifierBloodPressureDiastolic',
    display: 'Blood Pressure Diastolic',
  },
  BloodPressureSystolic: {
    code: 'HKQuantityTypeIdentifierBloodPressureSystolic',
    display: 'Blood Pressure Systolic',
  },
  BodyFatPercentage: {
    code: 'HKQuantityTypeIdentifierBodyFatPercentage',
    display: 'Body Fat Percentage',
  },
  BodyMass: {
    code: 'HKQuantityTypeIdentifierBodyMass',
    display: 'Body Mass',
  },
  BodyMassIndex: {
    code: 'HKQuantityTypeIdentifierBodyMassIndex',
    display: 'Body Mass Index',
  },
  BodyTemperature: {
    code: 'HKQuantityTypeIdentifierBodyTemperature',
    display: 'Body Temperature',
  },
  CyclingCadence: {
    code: 'HKQuantityTypeIdentifierCyclingCadence',
    display: 'Cycling Cadence',
  },
  CyclingFunctionalThresholdPower: {
    code: 'HKQuantityTypeIdentifierCyclingFunctionalThresholdPower',
    display: 'Cycling Functional Threshold Power',
  },
  CyclingPower: {
    code: 'HKQuantityTypeIdentifierCyclingPower',
    display: 'Cycling Power',
  },
  CyclingSpeed: {
    code: 'HKQuantityTypeIdentifierCyclingSpeed',
    display: 'Cycling Speed',
  },
  DietaryBiotin: {
    code: 'HKQuantityTypeIdentifierDietaryBiotin',
    display: 'Dietary Biotin',
  },
  DietaryCaffeine: {
    code: 'HKQuantityTypeIdentifierDietaryCaffeine',
    display: 'Dietary Caffeine',
  },
  DietaryCalcium: {
    code: 'HKQuantityTypeIdentifierDietaryCalcium',
    display: 'Dietary Calcium',
  },
  DietaryCarbohydrates: {
    code: 'HKQuantityTypeIdentifierDietaryCarbohydrates',
    display: 'Dietary Carbohydrates',
  },
  DietaryChloride: {
    code: 'HKQuantityTypeIdentifierDietaryChloride',
    display: 'Dietary Chloride',
  },
  DietaryCholesterol: {
    code: 'HKQuantityTypeIdentifierDietaryCholesterol',
    display: 'Dietary Cholesterol',
  },
  DietaryChromium: {
    code: 'HKQuantityTypeIdentifierDietaryChromium',
    display: 'Dietary Chromium',
  },
  DietaryCopper: {
    code: 'HKQuantityTypeIdentifierDietaryCopper',
    display: 'Dietary Copper',
  },
  DietaryEnergyConsumed: {
    code: 'HKQuantityTypeIdentifierDietaryEnergyConsumed',
    display: 'Dietary Energy Consumed',
  },
  DietaryFatMonounsaturated: {
    code: 'HKQuantityTypeIdentifierDietaryFatMonounsaturated',
    display: 'Dietary Fat Monounsaturated',
  },
  DietaryFatPolyunsaturated: {
    code: 'HKQuantityTypeIdentifierDietaryFatPolyunsaturated',
    display: 'Dietary Fat Polyunsaturated',
  },
  DietaryFatSaturated: {
    code: 'HKQuantityTypeIdentifierDietaryFatSaturated',
    display: 'Dietary Fat Saturated',
  },
  DietaryFatTotal: {
    code: 'HKQuantityTypeIdentifierDietaryFatTotal',
    display: 'Dietary Fat Total',
  },
  DietaryFiber: {
    code: 'HKQuantityTypeIdentifierDietaryFiber',
    display: 'Dietary Fiber',
  },
  DietaryFolate: {
    code: 'HKQuantityTypeIdentifierDietaryFolate',
    display: 'Dietary Folate',
  },
  DietaryIodine: {
    code: 'HKQuantityTypeIdentifierDietaryIodine',
    display: 'Dietary Iodine',
  },
  DietaryIron: {
    code: 'HKQuantityTypeIdentifierDietaryIron',
    display: 'Dietary Iron',
  },
  DietaryMagnesium: {
    code: 'HKQuantityTypeIdentifierDietaryMagnesium',
    display: 'Dietary Magnesium',
  },
  DietaryManganese: {
    code: 'HKQuantityTypeIdentifierDietaryManganese',
    display: 'Dietary Manganese',
  },
  DietaryMolybdenum: {
    code: 'HKQuantityTypeIdentifierDietaryMolybdenum',
    display: 'Dietary Molybdenum',
  },
  DietaryNiacin: {
    code: 'HKQuantityTypeIdentifierDietaryNiacin',
    display: 'Dietary Niacin',
  },
  DietaryPantothenicAcid: {
    code: 'HKQuantityTypeIdentifierDietaryPantothenicAcid',
    display: 'Dietary Pantothenic Acid',
  },
  DietaryPhosphorus: {
    code: 'HKQuantityTypeIdentifierDietaryPhosphorus',
    display: 'Dietary Phosphorus',
  },
  DietaryPotassium: {
    code: 'HKQuantityTypeIdentifierDietaryPotassium',
    display: 'Dietary Potassium',
  },
  DietaryProtein: {
    code: 'HKQuantityTypeIdentifierDietaryProtein',
    display: 'Dietary Protein',
  },
  DietaryRiboflavin: {
    code: 'HKQuantityTypeIdentifierDietaryRiboflavin',
    display: 'Dietary Riboflavin',
  },
  DietarySelenium: {
    code: 'HKQuantityTypeIdentifierDietarySelenium',
    display: 'Dietary Selenium',
  },
  DietarySodium: {
    code: 'HKQuantityTypeIdentifierDietarySodium',
    display: 'Dietary Sodium',
  },
  DietarySugar: {
    code: 'HKQuantityTypeIdentifierDietarySugar',
    display: 'Dietary Sugar',
  },
  DietaryThiamin: {
    code: 'HKQuantityTypeIdentifierDietaryThiamin',
    display: 'Dietary Thiamin',
  },
  DietaryVitaminA: {
    code: 'HKQuantityTypeIdentifierDietaryVitaminA',
    display: 'Dietary Vitamin A',
  },
  DietaryVitaminB12: {
    code: 'HKQuantityTypeIdentifierDietaryVitaminB12',
    display: 'Dietary Vitamin B12',
  },
  DietaryVitaminB6: {
    code: 'HKQuantityTypeIdentifierDietaryVitaminB6',
    display: 'Dietary Vitamin B6',
  },
  DietaryVitaminC: {
    code: 'HKQuantityTypeIdentifierDietaryVitaminC',
    display: 'Dietary Vitamin C',
  },
  DietaryVitaminD: {
    code: 'HKQuantityTypeIdentifierDietaryVitaminD',
    display: 'Dietary Vitamin D',
  },
  DietaryVitaminE: {
    code: 'HKQuantityTypeIdentifierDietaryVitaminE',
    display: 'Dietary Vitamin E',
  },
  DietaryVitaminK: {
    code: 'HKQuantityTypeIdentifierDietaryVitaminK',
    display: 'Dietary Vitamin K',
  },
  DietaryWater: {
    code: 'HKQuantityTypeIdentifierDietaryWater',
    display: 'Dietary Water',
  },
  DietaryZinc: {
    code: 'HKQuantityTypeIdentifierDietaryZinc',
    display: 'Dietary Zinc',
  },
  DistanceCycling: {
    code: 'HKQuantityTypeIdentifierDistanceCycling',
    display: 'Distance Cycling',
  },
  DistanceDownhillSnowSports: {
    code: 'HKQuantityTypeIdentifierDistanceDownhillSnowSports',
    display: 'Distance Downhill SnowSports',
  },
  DistanceSwimming: {
    code: 'HKQuantityTypeIdentifierDistanceSwimming',
    display: 'Distance Swimming',
  },
  DistanceWalkingRunning: {
    code: 'HKQuantityTypeIdentifierDistanceWalkingRunning',
    display: 'Distance Walking Running',
  },
  DistanceWheelchair: {
    code: 'HKQuantityTypeIdentifierDistanceWheelchair',
    display: 'Distance Wheelchair',
  },
  ElectrodermalActivity: {
    code: 'HKQuantityTypeIdentifierElectrodermalActivity',
    display: 'Electrodermal Activity',
  },
  EnvironmentalAudioExposure: {
    code: 'HKQuantityTypeIdentifierEnvironmentalAudioExposure',
    display: 'Environmental Audio Exposure',
  },
  EnvironmentalSoundReduction: {
    code: 'HKQuantityTypeIdentifierEnvironmentalSoundReduction',
    display: 'Environmental Sound Reduction',
  },
  FlightsClimbed: {
    code: 'HKQuantityTypeIdentifierFlightsClimbed',
    display: 'Flights Climbed',
  },
  ForcedExpiratoryVolume1: {
    code: 'HKQuantityTypeIdentifierForcedExpiratoryVolume1',
    display: 'Forced Expiratory Volume in 1s',
  },
  ForcedVitalCapacity: {
    code: 'HKQuantityTypeIdentifierForcedVitalCapacity',
    display: 'Forced Vital Capacity',
  },
  HeadphoneAudioExposure: {
    code: 'HKQuantityTypeIdentifierHeadphoneAudioExposure',
    display: 'Headphone Audio Exposure',
  },
  HeartRate: {
    code: 'HKQuantityTypeIdentifierHeartRate',
    display: 'Heart Rate',
  },
  HeartRateRecoveryOneMinute: {
    code: 'HKQuantityTypeIdentifierHeartRateRecoveryOneMinute',
    display: 'Heart Rate Recovery One Minute',
  },
  HeartRateVariabilitySDNN: {
    code: 'HKQuantityTypeIdentifierHeartRateVariabilitySDNN',
    display: 'Heart Rate Variability SDNN',
  },
  Height: {
    code: 'HKQuantityTypeIdentifierHeight',
    display: 'Height',
  },
  InhalerUsage: {
    code: 'HKQuantityTypeIdentifierInhalerUsage',
    display: 'Inhaler Usage',
  },
  InsulinDelivery: {
    code: 'HKQuantityTypeIdentifierInsulinDelivery',
    display: 'Insulin Delivery',
  },
  LeanBodyMass: {
    code: 'HKQuantityTypeIdentifierLeanBodyMass',
    display: 'Lean Body Mass',
  },
  NikeFuel: {
    code: 'HKQuantityTypeIdentifierNikeFuel',
    display: 'Nike Fuel',
  },
  NumberOfAlcoholicBeverages: {
    code: 'HKQuantityTypeIdentifierNumberOfAlcoholicBeverages',
    display: 'Number Of Alcoholic Beverages',
  },
  NumberOfTimesFallen: {
    code: 'HKQuantityTypeIdentifierNumberOfTimesFallen',
    display: 'Number Of Times Fallen',
  },
  OxygenSaturation: {
    code: 'HKQuantityTypeIdentifierOxygenSaturation',
    display: 'Oxygen Saturation',
  },
  PeakExpiratoryFlowRate: {
    code: 'HKQuantityTypeIdentifierPeakExpiratoryFlowRate',
    display: 'Peak Expiratory Flow Rate',
  },
  PeripheralPerfusionIndex: {
    code: 'HKQuantityTypeIdentifierPeripheralPerfusionIndex',
    display: 'Peripheral Perfusion Index',
  },
  PhysicalEffort: {
    code: 'HKQuantityTypeIdentifierPhysicalEffort',
    display: 'Physical Effort',
  },
  PushCount: {
    code: 'HKQuantityTypeIdentifierPushCount',
    display: 'Push Count',
  },
  RespiratoryRate: {
    code: 'HKQuantityTypeIdentifierRespiratoryRate',
    display: 'Respiratory Rate',
  },
  RestingHeartRate: {
    code: 'HKQuantityTypeIdentifierRestingHeartRate',
    display: 'Resting Heart Rate',
  },
  RunningGroundContactTime: {
    code: 'HKQuantityTypeIdentifierRunningGroundContactTime',
    display: 'Running Ground Contact Time',
  },
  RunningPower: {
    code: 'HKQuantityTypeIdentifierRunningPower',
    display: 'Running Power',
  },
  RunningSpeed: {
    code: 'HKQuantityTypeIdentifierRunningSpeed',
    display: 'Running Speed',
  },
  RunningStrideLength: {
    code: 'HKQuantityTypeIdentifierRunningStrideLength',
    display: 'Running Stride Length',
  },
  RunningVerticalOscillation: {
    code: 'HKQuantityTypeIdentifierRunningVerticalOscillation',
    display: 'Running Vertical Oscillation',
  },
  SixMinuteWalkTestDistance: {
    code: 'HKQuantityTypeIdentifierSixMinuteWalkTestDistance',
    display: 'Six Minute Walk Test Distance',
  },
  StairAscentSpeed: {
    code: 'HKQuantityTypeIdentifierStairAscentSpeed',
    display: 'Stair Ascent Speed',
  },
  StairDescentSpeed: {
    code: 'HKQuantityTypeIdentifierStairDescentSpeed',
    display: 'Stair Descent Speed',
  },
  StepCount: {
    code: 'HKQuantityTypeIdentifierStepCount',
    display: 'Step Count',
  },
  SwimmingStrokeCount: {
    code: 'HKQuantityTypeIdentifierSwimmingStrokeCount',
    display: 'Swimming Stroke Count',
  },
  UnderwaterDepth: {
    code: 'HKQuantityTypeIdentifierUnderwaterDepth',
    display: 'Underwater Depth',
  },
  UvExposure: {
    code: 'HKQuantityTypeIdentifierUvExposure',
    display: 'UV Exposure',
  },
  Vo2Max: {
    code: 'HKQuantityTypeIdentifierVo2Max',
    display: 'Vo2 Max',
  },
  WaistCircumference: {
    code: 'HKQuantityTypeIdentifierWaistCircumference',
    display: 'Waist Circumference',
  },
  WalkingAsymmetryPercentage: {
    code: 'HKQuantityTypeIdentifierWalkingAsymmetryPercentage',
    display: 'Walking Asymmetry Percentage',
  },
  WalkingDoubleSupportPercentage: {
    code: 'HKQuantityTypeIdentifierWalkingDoubleSupportPercentage',
    display: 'Walking Double Support Percentage',
  },
  WalkingHeartRateAverage: {
    code: 'HKQuantityTypeIdentifierWalkingHeartRateAverage',
    display: 'Walking Heart Rate Average',
  },
  WalkingSpeed: {
    code: 'HKQuantityTypeIdentifierWalkingSpeed',
    display: 'Walking Speed',
  },
  WalkingStepLength: {
    code: 'HKQuantityTypeIdentifierWalkingStepLength',
    display: 'Walking Step Length',
  },
  WaterTemperature: {
    code: 'HKQuantityTypeIdentifierWaterTemperature',
    display: 'Water Temperature',
  },
} as const;

type HKSeriesMap = {
  [K in ValueOf<typeof SeriesSampleIdentifier>]?: Readonly<Code>;
};

const HKSeries: HKSeriesMap = {
  Electrocardiogram: {
    code: 'HKElectrocardiogramType',
    display: 'Electrocardiogram',
  },
  HeartbeatSeries: {
    code: 'HKDataTypeIdentifierHeartbeatSeries',
    display: 'Heartbeat Series',
  },
};

/*
export const WorkoutTypeIdentifier = {
  Workout: {
    code: 'Workout',
    display: 'Workout',
  },
} as const;
*/

export default {
  HKCategory,
  HKCorrelation,
  HKClinical,
  HKCharacteristic,
  HKQuantity,
  HKSeries,
};
