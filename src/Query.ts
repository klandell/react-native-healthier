import type ComparisonOperator from './constants/ComparisonOperator';
import type DeviceProperty from './constants/DeviceProperty';
import type MetadataKey from './constants/MetadataKey';
import type SortIdentifier from './constants/SortIdentifier';
import type { ValueOf } from './types';

import type CategoryTypeIdentifier from './constants/CategoryTypeIdentifier';
// import type CharacteristicTypeIdentifier from './constants/CharacteristicTypeIdentifier';
// import type CorrelationTypeIdentifier from './constants/CorrelationTypeIdentifier';
import type ClinicalTypeIdentifier from './constants/ClinicalTypeIdentifier';
import type QuantityTypeIdentifier from './constants/QuantityTypeIdentifier';
import type SeriesSampleIdentifier from './constants/SeriesSampleIdentifier';
import type StatisticsOptions from './constants/StatisticsOptions';
// import type WorkoutTypeIdentifer from './constants/WorkoutTypeIdentifer';

// TODO: Implement the rest of the
type SampleType =
  | ValueOf<typeof CategoryTypeIdentifier>
  // | ValueOf<typeof CharacteristicTypeIdentifier>
  | ValueOf<typeof ClinicalTypeIdentifier>
  // | ValueOf<typeof CorrelationTypeIdentifier>
  | ValueOf<typeof QuantityTypeIdentifier>
  // | ValueOf<typeof WorkoutTypeIdentifer>;
  | ValueOf<typeof SeriesSampleIdentifier>;

type SampleQueryDescriptor = {
  type: 'SampleQuery';
  sampleType: string;
  predicate: Predicate | CompoundPredicate;
  limit: number;
  sortDescriptors: SortDescriptor[];
  resultOptions: ResultOptions;
};

type StatisticsCollectionQueryDescriptor = {
  type: 'StatisticsCollectionQuery';
  sampleType: string;
  predicate: Predicate | CompoundPredicate;
  anchorDate: string;
  options: number;
  intervalComponents: DateInterval;
};

export type QueryDescriptor = SampleQueryDescriptor;

type Predicate =
  | { type: 'Nil' }
  | { type: 'ForObject'; query: PredicateWithUUID }
  | {
      type: 'ForObjects';
      query:
        | PredicateWithDeviceProperty
        | PredicateWithMetadataKey
        | PredicateWithUUID;
    }
  | { type: 'ForSamples'; query: PredicateWithDateRange };

type CompoundPredicate =
  | { type: 'And'; subpredicates: (CompoundPredicate | Predicate)[] }
  | { type: 'Not'; subpredicate: CompoundPredicate | Predicate }
  | { type: 'Or'; subpredicates: (CompoundPredicate | Predicate)[] };

type ResultOptions = {
  includeDevice?: boolean;
  includeSource?: boolean;
};

// TODO: Implement result options!
const defaultResultOptions: ResultOptions = {
  includeDevice: false,
  includeSource: false,
};

type SampleQueryOptions = {
  sampleType: SampleType;
  predicate?: Predicate | CompoundPredicate;
  limit?: number;
  sortDescriptors?: SortDescriptor[];
  resultOptions?: ResultOptions;
};

/**
 * A general query that returns a snapshot of all the matching samples
 * currently saved in the HealthKit store.
 *
 * The sample query returns sample objects that match the provided type and predicate.
 * You can provide a sort order for the returned samples, or limit the number of samples returned.
 * @param options
 */
export function sampleQuery(
  options: SampleQueryOptions
): SampleQueryDescriptor {
  const {
    sampleType,
    predicate = { type: 'Nil' },
    limit = 0,
    sortDescriptors = [],
    resultOptions: resOpts = {},
  } = options;
  const resultOptions = { ...defaultResultOptions, ...resOpts };

  if (!Number.isInteger(limit) || limit < 0) {
    throw new Error(
      'The "limit" option must be a whole number. O indicates no limit.'
    );
  }

  return {
    type: 'SampleQuery',
    sampleType,
    predicate,
    limit,
    sortDescriptors,
    resultOptions,
  };
}

type StatisticsCollectionQueryOptions = {
  quantityType: ValueOf<typeof QuantityTypeIdentifier>;
  predicate?: Predicate | CompoundPredicate;
  anchorDate: Date;
  options: StatisticsOptions[];
  intervalComponents: DateInterval;
};

type DateInterval = {
  minute?: number;
  hour?: number;
  day?: number;
  month?: number;
  year?: number;
};

export function statisticsCollectionQuery(
  options: StatisticsCollectionQueryOptions
): StatisticsCollectionQueryDescriptor {
  const {
    quantityType: sampleType,
    predicate = { type: 'Nil' },
    anchorDate,
    options: opts,
    intervalComponents,
  } = options;

  return {
    type: 'StatisticsCollectionQuery',
    sampleType,
    predicate,
    anchorDate: anchorDate.toISOString(),
    options: opts.reduce((acc, val) => acc + val, 0),
    intervalComponents,
  };
}

type SortDescriptor = {
  type: ValueOf<typeof SortIdentifier>;
  data: { ascending: boolean };
};

/**
 * Creates a sort descriptor for a given sort identifier.
 * @param options.key - The key to a pre-defined sort identifier.
 * @param options.ascending - Sort ascending or descending.
 * @returns A sort descriptor for the samples.
 */
export function createSortDescriptor(options: {
  key: ValueOf<typeof SortIdentifier>;
  ascending?: boolean;
}): SortDescriptor {
  const { key, ascending = true } = options;
  return { type: key, data: { ascending } };
}

type PredicateWithUUID = {
  type: 'UUID';
  data: {
    uuid: UUID | UUID[];
  };
};

type UUID = string;

/**
 * Returns a predicate that matches an object with the specified universally
 * unique identifier (UUID).
 *
 * HealthKit assigns a UUID to each object when it is saved to the HealthKit store.
 * HealthKit uses these IDs to uniquely identify objects from the store.
 * @param uuid - The target UUID.
 * @returns A predicate that matches a specific object based on its UUID.
 */
export function predicateForObjectWithUUID(uuid: UUID): Predicate {
  return { type: 'ForObject', query: { type: 'UUID', data: { uuid } } };
}

type PredicateWithDeviceProperty = {
  type: 'DeviceProperty';
  data: { key: ValueOf<typeof DeviceProperty>; value: string[] };
};

/**
 * Returns a predicate that matches all objects created by devices with the specified properties.
 * @param options.key - A string specifying the device’s property.
 * @param options.value - The target property values.
 * @returns A predicate that matches all objects created by a device whose specified property matches one of the allowed values.
 */
export function predicateForObjectsWithDeviceProperty(options: {
  key: ValueOf<typeof DeviceProperty>;
  value: string | string[];
}): Predicate {
  const { key, value } = options;
  const valueArray = Array.isArray(value) ? value : [value];
  return {
    type: 'ForObjects',
    query: { type: 'DeviceProperty', data: { key, value: valueArray } },
  };
}

type PredicateWithMetadataKey = {
  type: 'MetadataKey';
  data: {
    key: ValueOf<typeof MetadataKey>;
    value?: MetadataValue | MetadataValue[];
    operator?: ValueOf<typeof ComparisonOperator>;
  };
};

type MetadataValue = boolean | string | number | Date;

/**
 * Returns a predicate that matches objects based on the provided metadata key, value, and operator.
 * @param options.key - The metadata key for the value to be matched.
 * @param options.operator - Defines the relationship used to match the metadata’s value with the provided value.
 * @param options.value - The target value.
 * @returns A predicate that matches objects based on the specified metadata key, operator, and value.
 */
export function predicateForObjectsWithMetadataKey(options: {
  key: ValueOf<typeof MetadataKey>;
  value?: MetadataValue | MetadataValue[];
  operator?: ValueOf<typeof ComparisonOperator>;
}): Predicate {
  const { key, value, operator } = options;
  return {
    type: 'ForObjects',
    query: { type: 'MetadataKey', data: { key, value, operator } },
  };
}

/**
 * Returns a predicate that matches an object with the specified universally
 * unique identifier (UUID).
 *
 * HealthKit assigns a UUID to each object when it is saved to the HealthKit store.
 * HealthKit uses these IDs to uniquely identify objects from the store.
 * @param uuid - The target UUID.
 * @returns A predicate that matches a specific object based on its UUID.
 */
export function predicateForObjectsWithUUID(uuid: UUID[]): Predicate {
  return { type: 'ForObjects', query: { type: 'UUID', data: { uuid } } };
}

type PredicateWithDateRange = {
  type: 'DateRange';
  data: { start?: string; end?: string; options?: DateRangeOptions[] };
};

type DateRangeOptions = 'StrictStartDate' | 'StrictEndDate';

/**
 * Returns a predicate for samples whose start and end dates fall within the specified time interval.
 * @param opts.start - The start date for the target time interval.
 * @param opts.end - The end date for the target time interval.
 * @param opts.options - A constant that specifies how the sample’s start and end date are compared with the target time interval
 * @returns A predicate for samples whose start and end dates fall within the specified time interval. This predicate works only with samples
 */
export function predicateForSamples(opts: {
  start?: Date;
  end?: Date;
  options?: DateRangeOptions[];
}): Predicate {
  const { start: startDate, end: endDate, options } = opts;

  const start = startDate && startDate.toISOString();
  const end = endDate && endDate.toISOString();

  return {
    type: 'ForSamples',
    query: { type: 'DateRange', data: { start, end, options } },
  };
}

type CompoundOptions =
  | { type: 'And' | 'Or'; subpredicates: (CompoundPredicate | Predicate)[] }
  | { type: 'Not'; subpredicate: CompoundPredicate | Predicate };

/**
 * Evaluates the logical combination of other predicates
 * @param options.type - The logical operator to apply
 * @param options.subpredicates - An array or Predicates
 * @returns a compound predicate
 */
export function compoundPredicate(options: CompoundOptions): CompoundPredicate {
  const { type: compoundType } = options;
  // And / Or have multiple subpredicates. Handle them in the same way
  if (compoundType === 'And' || compoundType === 'Or') {
    const { subpredicates } = options;
    return { type: compoundType, subpredicates };
  }
  // Otherwise, we have the Not type, which has only one subpredicate
  if (compoundType === 'Not') {
    const { subpredicate } = options;
    if (compoundType === 'Not') return { type: 'Not', subpredicate };
  }
  // Throw an error if misconfigured, just in case.
  throw new Error('Invalid Compound Predicate type');
}
