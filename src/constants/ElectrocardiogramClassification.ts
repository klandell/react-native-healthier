enum ElectrocardiogramClassification {
  NotSet = 0,
  SinusRhythm = 1,
  AtrialFibrillation = 2,
  InconclusiveLowHeartRate = 3,
  InconclusiveHighHeartRate = 4,
  InconclusivePoorReading = 5,
  InconclusiveOther = 6,
  //
  ClassificationUnrecognized = 100,
}

export default ElectrocardiogramClassification;
