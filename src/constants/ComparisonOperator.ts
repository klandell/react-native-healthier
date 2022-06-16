const ComparisonOperator = {
  LessThan: 'LessThan',
  LessThanOrEqualTo: 'LessThanOrEqualTo',
  GreaterThan: 'GreaterThan',
  GreaterThanOrEqualTo: 'GreaterThanOrEqualTo',
  EqualTo: 'EqualTo',
  NotEqualTo: 'NotEqualTo',
  Matches: 'Matches',
  Like: 'Like',
  BeginsWith: 'BeginsWith',
  EndsWith: 'EndsWith',
  In: 'In',
  Contains: 'Contains',
  Between: 'Between',
} as const;

export default ComparisonOperator;
