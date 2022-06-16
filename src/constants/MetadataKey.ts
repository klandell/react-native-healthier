const MetadataKey = {
  /* ** GENERAL KEYS ** */
  ExternalUUID: 'ExternalUUID', // A unique identifier for an HKObject that is set by its source.
  TimeZone: 'TimeZone', // The user’s time zone when the HealthKit object was created.
  WasUserEntered: 'WasUserEntered', // A key that indicates whether the sample was entered by the user.
  /* ** ESTIMATE KEYS ** */
  DateOfEarliestDataUsedForEstimate: 'DateOfEarliestDataUsedForEstimate', // The earliest date of data used to calculate the sample’s estimated value.
  /* ** DEVICE INFORMATION KEYS ** */
  DeviceSerialNumber: 'DeviceSerialNumber', // The key for the serial number of the device that generated the data.
  UDIDeviceIdentifier: 'UDIDeviceIdentifier', // The device identifier portion of a device’s UDI (unique device identifier).
  UDIProductionIdentifier: 'UDIProductionIdentifier', // The production identifier portion of a device’s UDI (unique device identifier).
  DigitalSignature: 'DigitalSignature', // A digital signature that can be used to validate the origin of the HealthKit object.
  DeviceName: 'DeviceName', // The name of the device that took this reading.
  DeviceManufacturerName: 'DeviceManufacturerName', // The name of the manufacturer of the device that took this reading.
  DevicePlacementSide: 'DevicePlacementSide', // The key for metadata indicating the placement of the device that measured a sample.
  AppleDeviceCalibrated: 'AppleDeviceCalibrated', // The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.
  /* ** SYNC KEYS ** */
  SyncIdentifier: 'SyncIdentifier', // A unique string that identifies a piece of data so it can be updated and synced.
  SyncVersion: 'SyncVersion', // The version number for a piece of data, used when updating or syncing.
  /* ** LAB KEYS ** */
  WasTakenInLab: 'WasTakenInLab', // A key that indicates whether the sample was taken in a lab.
  ReferenceRangeLowerLimit: 'ReferenceRangeLowerLimit', // A key that indicates the lower limit of the reference range for a lab result.
  ReferenceRangeUpperLimit: 'ReferenceRangeUpperLimit', // A key that indicates the upper limit of the reference range for a lab result.
  /* ** WEATHER KEYS ** */
  WeatherCondition: 'WeatherCondition', // A key that represents the weather condition during the sample.
  WeatherTemperature: 'WeatherTemperature', // A key that represents the weather temperature during the sample.
  WeatherHumidity: 'WeatherHumidity', // A key that represents the weather humidity during the sample.
  BarometricPressure: 'BarometricPressure', // The metadata key for the barometric pressure associated with a sample.
  /* ** WORKOUT KEYS ** */
  WorkoutBrandName: 'WorkoutBrandName', // The brand name of a particular workout.
  GroupFitness: 'GroupFitness', // A key that indicates whether the workout was performed as part of a group fitness class.
  IndoorWorkout: 'IndoorWorkout', // A key that indicates whether the workout was performed indoors.
  CoachedWorkout: 'CoachedWorkout', // A key that indicates whether the workout was performed with a coach or personal trainer.
  AverageSpeed: 'AverageSpeed', // A key that indicates the average speed during a workout.
  MaximumSpeed: 'MaximumSpeed', // A key that indicates the maximum speed during a workout.
  AverageMETs: 'AverageMETs', // A key that indicates the average Metabolic Equivalent of Task (METs) during a workout.
  SwimmingLocationType: 'SwimmingLocationType', // A key that indicates the location for a swimming workout.
  SwimmingStrokeStyle: 'SwimmingStrokeStyle', // A key that indicates the predominant stroke style for a lap of swimming.
  LapLength: 'LapLength', // A key that indicates the length of a lap during a workout.
  AlpineSlopeGrade: 'AlpineSlopeGrade', // A key that indicates the percent slope of a ski run.
  ElevationAscended: 'ElevationAscended', // A key that indicates the cumulative elevation ascended during a workout.
  ElevationDescended: 'ElevationDescended', // A key that indicates the cumulative elevation descended during a workout.
  FitnessMachineDuration: 'FitnessMachineDuration', // The workout duration displayed by a connected GymKit fitness machine.
  CrossTrainerDistance: 'CrossTrainerDistance', // The workout distance displayed by a connected GymKit cross-trainer machine.
  IndoorBikeDistance: 'IndoorBikeDistance', // The workout distance displayed by a connected GymKit exercise bike.
  /* ** CARDIO FITNESS KEYS ** */
  VO2MaxValue: 'VO2MaxValue', // The maximum oxygen consumption rate during exercise of increasing intensity.
  LowCardioFitnessEventThreshold: 'LowCardioFitnessEventThreshold', // The VO2 max threshold used to categorize low-level cardio fitness events.
  /* ** NUTRITION KEYS ** */
  FoodType: 'FoodType', // The type of food that the HealthKit object represents.
  /* ** VITAL SENSORS KEYS ** */
  BodyTemperatureSensorLocation: 'BodyTemperatureSensorLocation', // The location where a particular body temperature reading was taken.
  HeartRateSensorLocation: 'HeartRateSensorLocation', // The location where a particular heart rate reading was taken.
  HeartRateMotionContext: 'HeartRateMotionContext', // The user’s activity level when the heart rate sample was measured.
  KeyPathAverageHeartRate: 'KeyPathAverageHeartRate', // The key path for the sample’s average heart rate.
  VO2MaxTestType: 'VO2MaxTestType', // The method used to calculate the user’s VO2 max rate.
  /* ** AUDIO EVENT KEYS ** */
  AudioExposureLevel: 'AudioExposureLevel', // The audio level associated with an audio event.
  AudioExposureDuration: 'AudioExposureDuration', // The audio exposure event’s duration.
  /* ** BLOOD GLUCOSE KEYS ** */
  BloodGlucoseMealTime: 'BloodGlucoseMealTime', // A key that indicates the relative timing of a blood glucose reading to a meal.
  InsulinDeliveryReason: 'InsulinDeliveryReason', // The medical reason for administering insulin.
  /* ** REPRODUCTIVE HEALTH KEYS ** */
  MenstrualCycleStart: 'MenstrualCycleStart', // A key that indicates whether the sample represents the start of a menstrual cycle.
  SexualActivityProtectionUsed: 'SexualActivityProtectionUsed', // A key that indicates whether protection was used during sexual activity.
  /* ** ALGORITHM KEYS ** */
  AlgorithmVersion: 'AlgorithmVersion', // A key that indicates the version number of the algorithm used to calculate the sample’s value.
  AppleECGAlgorithmVersion: 'AppleECGAlgorithmVersion', // A key for metadata indicating the version number of the algorithm Apple Watch uses to generate an ECG reading.
  KeyPathECGClassification: 'KeyPathECGClassification', // The key path for the sample’s classification.
  KeyPathECGSymptomsStatus: 'KeyPathECGSymptomsStatus', // The key path for the sample’s symptom status.
} as const;

export default MetadataKey;
