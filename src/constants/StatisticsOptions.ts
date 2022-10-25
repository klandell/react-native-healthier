/* eslint-disable no-bitwise */
enum StatisticsOptions {
  None = 0,
  SeparateBySource = 1 << 0,
  DiscreteAverage = 1 << 1,
  DiscreteMin = 1 << 2,
  DiscreteMax = 1 << 3,
  CumulativeSum = 1 << 4,
  // TODO: iOS 13.0
  MostRecent = 1 << 5,
  // TODO: iOS 13.0
  Duration = 1 << 6,
}

export default StatisticsOptions;
