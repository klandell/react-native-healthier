const ComparisonOperator = {
  BeginsWith: 'BeginsWith',
  Between: 'Between',
  Contains: 'Contains',
  EndsWith: 'EndsWith',
  EqualTo: 'EqualTo',
  GreaterThan: 'GreaterThan',
  GreaterThanOrEqualTo: 'GreaterThanOrEqualTo',
  In: 'In',
  LessThan: 'LessThan',
  LessThanOrEqualTo: 'LessThanOrEqualTo',
  Like: 'Like',
  Matches: 'Matches',
  NotEqualTo: 'NotEqualTo',
} as const;

export default ComparisonOperator;
