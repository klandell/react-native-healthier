import type ComparisonOperator from './constants/ComparisonOperator';
import type DeviceProperty from './constants/DeviceProperty';
import type MetadataKey from './constants/MetadataKey';
import type SampleType from './constants/SampleType';
import type SortIdentifier from './constants/SortIdentifier';
import type { ValueOf } from './types';

export type Query = SampleQuery | AnchoredObjectQuery | ObserverQuery;

type SampleQuery = {
  id: 'SampleQuery';
  sampleType: string;
  predicate: Predicate | CompoundPredicate;
  limit: number;
  sortDescriptors: SortDescriptor[];
  resultOptions: ResultOptions;
};

type AnchoredObjectQuery = {
  id: 'AnchoredObjectQuery';
  sampleType: string;
  anchor?: string;
  predicate: Predicate | CompoundPredicate;
  limit: number;
  resultOptions: ResultOptions;
};

type ObserverQuery = {
  id: 'ObserverQuery';
  sampleType: string;
  predicate: Predicate | CompoundPredicate;
};

type SortDescriptor = {
  id: ValueOf<typeof SortIdentifier>;
  data: { ascending: boolean };
};

type ResultOptions = {
  includeDevice?: boolean;
  includeSource?: boolean;
};

const defaultResultOptions: ResultOptions = {
  includeDevice: false,
  includeSource: false,
};

type SampleQueryOptions = {
  sampleType: keyof typeof SampleType;
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
export function sampleQuery(options: SampleQueryOptions): SampleQuery {
  const {
    sampleType,
    predicate = { id: 'Nil' },
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
    id: 'SampleQuery',
    sampleType,
    predicate,
    limit,
    sortDescriptors,
    resultOptions,
  };
}

type AnchoredObjectQueryOptions = {
  sampleType: keyof typeof SampleType;
  anchor?: string;
  predicate?: Predicate | CompoundPredicate;
  limit?: number;
  resultOptions?: ResultOptions;
};

/**
 * A query that returns changes to the HealthKit store, including a snapshot of new changes.
 */
export function anchoredObjectQuery(
  options: AnchoredObjectQueryOptions
): AnchoredObjectQuery {
  const {
    sampleType,
    anchor,
    predicate = { id: 'Nil' },
    limit = 0,
    resultOptions: resOpts = {},
  } = options;
  const resultOptions = { ...defaultResultOptions, ...resOpts };

  if (!Number.isInteger(limit) || limit < 0) {
    throw new Error(
      'The "limit" option must be a whole number. O indicates no limit.'
    );
  }

  return {
    id: 'AnchoredObjectQuery',
    sampleType,
    anchor,
    predicate,
    limit,
    resultOptions,
  };
}

type ObserverQueryOptions = {
  sampleType: ValueOf<typeof SampleType>;
  predicate?: Predicate | CompoundPredicate;
};

/**
 * A long-running query that monitors the HealthKit store and updates your app when
 * the HealthKit store saves or deletes a matching sample.
 *
 * Observer queries set up a long-running task on a background queue.
 * This task watches the HealthKit store, and alerts you when the store saves or removes matching data.
 * Your app uses observer queries to respond to changes made by other apps and devices. Observer queries
 * are immutable: You set their properties when you first create them, and you can’t change them.
 */
export function observerQuery(options: ObserverQueryOptions): ObserverQuery {
  const { sampleType, predicate = { id: 'Nil' } } = options;
  return {
    id: 'ObserverQuery',
    sampleType,
    predicate,
  };
}

/**
 * Creates a sort descriptor for a given sort identifier.
 * @param key - The key to a pre-defined sort identifier.
 * @param ascending - Sort ascending or descending.
 * @returns A sort descriptor for the samples.
 */
export function createSortDescriptor(
  key: keyof typeof SortIdentifier,
  ascending: boolean = true
): SortDescriptor {
  return { id: key, data: { ascending } };
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
export function predicateForObjectWithUUID(uuid: UUID): Predicate {
  return { id: 'ForObject', query: { id: 'UUID', data: { uuid } } };
}

/**
 * Returns a predicate that matches all objects created by devices with the specified properties.
 * @param options.key - A string specifying the device’s property.
 * @param options.value - The target property values.
 * @returns A predicate that matches all objects created by a device whose specified property matches one of the allowed values.
 */
export function predicateForObjectsWithDeviceProperty(options: {
  key: keyof typeof DeviceProperty;
  value: string | string[];
}): Predicate {
  const { key, value } = options;
  const valueArray = Array.isArray(value) ? value : [value];
  return {
    id: 'ForObjects',
    query: { id: 'DeviceProperty', data: { key, value: valueArray } },
  };
}

/**
 * Returns a predicate that matches objects based on the provided metadata key, value, and operator.
 * @param options.key - The metadata key for the value to be matched.
 * @param options.operator - Defines the relationship used to match the metadata’s value with the provided value.
 * @param options.value - The target value.
 * @returns A predicate that matches objects based on the specified metadata key, operator, and value.
 */
export function predicateForObjectsWithMetadataKey(options: {
  key: keyof typeof MetadataKey;
  value?: MetadataValue | MetadataValue[];
  operator?: keyof typeof ComparisonOperator;
}): Predicate {
  const { key, value, operator } = options;
  return {
    id: 'ForObjects',
    query: { id: 'MetadataKey', data: { key, value, operator } },
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
  return { id: 'ForObjects', query: { id: 'UUID', data: { uuid } } };
}

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
    id: 'ForSamples',
    query: { id: 'DateRange', data: { start, end, options } },
  };
}

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
    return { id: compoundType, subpredicates };
  }
  // Otherwise, we have the Not type, which has only one subpredicate
  if (compoundType === 'Not') {
    const { subpredicate } = options;
    if (compoundType === 'Not') return { id: 'Not', subpredicate };
  }
  // Throw an error if misconfigured, just in case.
  throw new Error('Invalid Compound Predicate type');
}

/*
 * TODO: CLEAN THESE UP!
 */

type UUID = string;

type PredicateWithUUID = {
  id: 'UUID';
  data: {
    uuid: UUID | UUID[];
  };
};

type MetadataValue = boolean | string | number | Date;

type PredicateWithMetadataKey = {
  id: 'MetadataKey';
  data: {
    key: ValueOf<typeof MetadataKey>;
    value?: MetadataValue | MetadataValue[];
    operator?: ValueOf<typeof ComparisonOperator>;
  };
};

type DateRangeOptions = 'StrictStartDate' | 'StrictEndDate';

type PredicateWithDateRange = {
  id: 'DateRange';
  data: { start?: string; end?: string; options?: DateRangeOptions[] };
};

type PredicateWithDeviceProperty = {
  id: 'DeviceProperty';
  data: { key: ValueOf<typeof DeviceProperty>; value: string[] };
};

type Predicate =
  | { id: 'Nil' }
  | {
      id: 'ForObject';
      query: PredicateWithUUID;
    }
  | {
      id: 'ForObjects';
      query:
        | PredicateWithDeviceProperty
        | PredicateWithMetadataKey
        | PredicateWithUUID;
    }
  | {
      id: 'ForSamples';
      query: PredicateWithDateRange;
    };

type CompoundPredicate =
  | {
      id: 'And';
      subpredicates: (CompoundPredicate | Predicate)[];
    }
  | {
      id: 'Not';
      subpredicate: CompoundPredicate | Predicate;
    }
  | {
      id: 'Or';
      subpredicates: (CompoundPredicate | Predicate)[];
    };

type CompoundOptions =
  | {
      type: 'And' | 'Or';
      subpredicates: (CompoundPredicate | Predicate)[];
    }
  | {
      type: 'Not';
      subpredicate: CompoundPredicate | Predicate;
    };
