const SampleType = {
  /*--------------------------------*/
  /*   HKQuantityType Identifiers   */
  /*--------------------------------*/
  BodyMassIndex: 'BodyMassIndex',
  BodyFatPercentage: 'BodyFatPercentage',
  Height: 'Height',
  BodyMass: 'BodyMass',
  LeanBodyMass: 'LeanBodyMass',
  WaistCircumference: 'WaistCircumference',
  StepCount: 'StepCount',
  DistanceWalkingRunning: 'DistanceWalkingRunning',
  DistanceCycling: 'DistanceCycling',
  DistanceWheelchair: 'DistanceWheelchair',
  BasalEnergyBurned: 'BasalEnergyBurned',
  ActiveEnergyBurned: 'ActiveEnergyBurned',
  FlightsClimbed: 'FlightsClimbed',
  NikeFuel: 'NikeFuel',
  AppleExerciseTime: 'AppleExerciseTime',
  PushCount: 'PushCount',
  DistanceSwimming: 'DistanceSwimming',
  SwimmingStrokeCount: 'SwimmingStrokeCount',
  Vo2Max: 'Vo2Max',
  DistanceDownhillSnowSports: 'DistanceDownhillSnowSports',
  AppleStandTime: 'AppleStandTime',
  WalkingSpeed: 'WalkingSpeed',
  WalkingDoubleSupportPercentage: 'WalkingDoubleSupportPercentage',
  WalkingAsymmetryPercentage: 'WalkingAsymmetryPercentage',
  WalkingStepLength: 'WalkingStepLength',
  SixMinuteWalkTestDistance: 'SixMinuteWalkTestDistance',
  StairAscentSpeed: 'StairAscentSpeed',
  StairDescentSpeed: 'StairDescentSpeed',
  AppleMoveTime: 'AppleMoveTime',
  AppleWalkingSteadiness: 'AppleWalkingSteadiness',
  HeartRate: 'HeartRate',
  BodyTemperature: 'BodyTemperature',
  BasalBodyTemperature: 'BasalBodyTemperature',
  BloodPressureSystolic: 'BloodPressureSystolic',
  BloodPressureDiastolic: 'BloodPressureDiastolic',
  RespiratoryRate: 'RespiratoryRate',
  RestingHeartRate: 'RestingHeartRate',
  WalkingHeartRateAverage: 'WalkingHeartRateAverage',
  HeartRateVariabilitySDNN: 'HeartRateVariabilitySDNN',
  OxygenSaturation: 'OxygenSaturation',
  PeripheralPerfusionIndex: 'PeripheralPerfusionIndex',
  BloodGlucose: 'BloodGlucose',
  NumberOfTimesFallen: 'NumberOfTimesFallen',
  ElectrodermalActivity: 'ElectrodermalActivity',
  InhalerUsage: 'InhalerUsage',
  InsulinDelivery: 'InsulinDelivery',
  BloodAlcoholContent: 'BloodAlcoholContent',
  ForcedVitalCapacity: 'ForcedVitalCapacity',
  ForcedExpiratoryVolume1: 'ForcedExpiratoryVolume1',
  PeakExpiratoryFlowRate: 'PeakExpiratoryFlowRate',
  EnvironmentalAudioExposure: 'EnvironmentalAudioExposure',
  HeadphoneAudioExposure: 'HeadphoneAudioExposure',
  NumberOfAlcoholicBeverages: 'NumberOfAlcoholicBeverages',
  DietaryFatTotal: 'DietaryFatTotal',
  DietaryFatPolyunsaturated: 'DietaryFatPolyunsaturated',
  DietaryFatMonounsaturated: 'DietaryFatMonounsaturated',
  DietaryFatSaturated: 'DietaryFatSaturated',
  DietaryCholesterol: 'DietaryCholesterol',
  DietarySodium: 'DietarySodium',
  DietaryCarbohydrates: 'DietaryCarbohydrates',
  DietaryFiber: 'DietaryFiber',
  DietarySugar: 'DietarySugar',
  DietaryEnergyConsumed: 'DietaryEnergyConsumed',
  DietaryProtein: 'DietaryProtein',
  DietaryVitaminA: 'DietaryVitaminA',
  DietaryVitaminB6: 'DietaryVitaminB6',
  DietaryVitaminB12: 'DietaryVitaminB12',
  DietaryVitaminC: 'DietaryVitaminC',
  DietaryVitaminD: 'DietaryVitaminD',
  DietaryVitaminE: 'DietaryVitaminE',
  DietaryVitaminK: 'DietaryVitaminK',
  DietaryCalcium: 'DietaryCalcium',
  DietaryIron: 'DietaryIron',
  DietaryThiamin: 'DietaryThiamin',
  DietaryRiboflavin: 'DietaryRiboflavin',
  DietaryNiacin: 'DietaryNiacin',
  DietaryFolate: 'DietaryFolate',
  DietaryBiotin: 'DietaryBiotin',
  DietaryPantothenicAcid: 'DietaryPantothenicAcid',
  DietaryPhosphorus: 'DietaryPhosphorus',
  DietaryIodine: 'DietaryIodine',
  DietaryMagnesium: 'DietaryMagnesium',
  DietaryZinc: 'DietaryZinc',
  DietarySelenium: 'DietarySelenium',
  DietaryCopper: 'DietaryCopper',
  DietaryManganese: 'DietaryManganese',
  DietaryChromium: 'DietaryChromium',
  DietaryMolybdenum: 'DietaryMolybdenum',
  DietaryChloride: 'DietaryChloride',
  DietaryPotassium: 'DietaryPotassium',
  DietaryCaffeine: 'DietaryCaffeine',
  DietaryWater: 'DietaryWater',
  UvExposure: 'UvExposure',
  /*--------------------------------*/
  /*   HKCategoryType Identifiers   */
  /*--------------------------------*/
  SleepAnalysis: 'SleepAnalysis',
  AppleStandHour: 'AppleStandHour',
  CervicalMucusQuality: 'CervicalMucusQuality',
  OvulationTestResult: 'OvulationTestResult',
  PregnancyTestResult: 'PregnancyTestResult',
  ProgesteroneTestResult: 'ProgesteroneTestResult',
  MenstrualFlow: 'MenstrualFlow',
  IntermenstrualBleeding: 'IntermenstrualBleeding',
  SexualActivity: 'SexualActivity',
  MindfulSession: 'MindfulSession',
  HighHeartRateEvent: 'HighHeartRateEvent',
  LowHeartRateEvent: 'LowHeartRateEvent',
  IrregularHeartRhythmEvent: 'IrregularHeartRhythmEvent',
  ToothbrushingEvent: 'ToothbrushingEvent',
  Pregnancy: 'Pregnancy',
  Lactation: 'Lactation',
  Contraceptive: 'Contraceptive',
  EnvironmentalAudioExposureEvent: 'EnvironmentalAudioExposureEvent',
  HeadphoneAudioExposureEvent: 'HeadphoneAudioExposureEvent',
  HandwashingEvent: 'HandwashingEvent',
  LowCardioFitnessEvent: 'LowCardioFitnessEvent',
  AppleWalkingSteadinessEvent: 'AppleWalkingSteadinessEvent',
  AbdominalCramps: 'AbdominalCramps',
  Acne: 'Acne',
  AppetiteChanges: 'AppetiteChanges',
  BladderIncontinence: 'BladderIncontinence',
  Bloating: 'Bloating',
  BreastPain: 'BreastPain',
  ChestTightnessOrPain: 'ChestTightnessOrPain',
  Chills: 'Chills',
  Constipation: 'Constipation',
  Coughing: 'Coughing',
  Diarrhea: 'Diarrhea',
  Dizziness: 'Dizziness',
  DrySkin: 'DrySkin',
  Fainting: 'Fainting',
  Fatigue: 'Fatigue',
  Fever: 'Fever',
  GeneralizedBodyAche: 'GeneralizedBodyAche',
  HairLoss: 'HairLoss',
  Headache: 'Headache',
  Heartburn: 'Heartburn',
  LossOfSmell: 'LossOfSmell',
  LossOfTaste: 'LossOfTaste',
  LowerBackPain: 'LowerBackPain',
  MemoryLapse: 'MemoryLapse',
  MoodChanges: 'MoodChanges',
  Nausea: 'Nausea',
  NightSweats: 'NightSweats',
  PelvicPain: 'PelvicPain',
  RapidPoundingOrFlutteringHeartbeat: 'RapidPoundingOrFlutteringHeartbeat',
  RunnyNose: 'RunnyNose',
  ShortnessOfBreath: 'ShortnessOfBreath',
  SinusCongestion: 'SinusCongestion',
  SkippedHeartbeat: 'SkippedHeartbeat',
  SleepChanges: 'SleepChanges',
  SoreThroat: 'SoreThroat',
  VaginalDryness: 'VaginalDryness',
  Vomiting: 'Vomiting',
  Wheezing: 'Wheezing',
  /*--------------------------------------*/
  /*   HKCharacteristicType Identifiers   */
  /*--------------------------------------*/
  BiologicalSex: 'BiologicalSex',
  BloodType: 'BloodType',
  DateOfBirth: 'DateOfBirth',
  FitzpatrickSkinType: 'FitzpatrickSkinType',
  WheelchairUse: 'WheelchairUse',
  ActivityMoveMode: 'ActivityMoveMode',
  /*-----------------------------------*/
  /*   HKCorrelationType Identifiers   */
  /*-----------------------------------*/
  BloodPressure: 'BloodPressure',
  Food: 'Food',
  /*------------------------------*/
  /*   HKWorkoutType Identifier   */
  /*------------------------------*/
  Workout: 'Workout',
  /*--------------------------------*/
  /*   HKSeriesSample Identifiers   */
  /*--------------------------------*/
  WorkoutRoute: 'WorkoutRoute',
  HeartbeatSeries: 'HeartbeatSeries',
  /*--------------------------------*/
  /*   HKAudiogramSampleType        */
  /*--------------------------------*/
  Audiogram: 'Audiogram',
  /*--------------------------------*/
  /*   HKElectrocardiogramType      */
  /*--------------------------------*/
  Electrocardiogram: 'Electrocardiogram',
} as const;

export default SampleType;
