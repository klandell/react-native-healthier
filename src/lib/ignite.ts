import HK, { HKSystemURI } from '../systems/HK';
import LOINC, { LOINCSystemURI } from '../systems/LOINC';
import type QuantityTypeIdentifier from '../constants/QuantityTypeIdentifier';
import type CategoryTypeIdentifier from '../constants/CategoryTypeIdentifier';
import type SeriesSampleIdentifier from '../constants/SeriesSampleIdentifier';
import UCOM, { UCOMSystemURI } from '../systems/UCOM';
import type { Code, CodeWithSystem, TimeInterval, ValueOf } from '../types';

type Subject = {
  reference: string; // Literal reference, Relative, internal or absolute URL
};

type Observation = {
  resourceType: 'Observation';
  status: 'final';
  identifier: { value: string; system: string }[];
  code: { coding: CodeWithSystem[] };
  subject: Subject;
  valueQuantity?: {
    value: number;
    unit: string;
    code: string;
    system: string;
  };
  valueInteger?: number;
  valueString?: string;
  valueSampledData?: {
    origin: { value: number; unit: string; code: string; system: string };
    period: number;
    factor: number;
    lowerLimit?: number;
    upperLimit?: number;
    dimensions: number;
    data: string;
  };
  effectivePeriod: {
    start: string; // ISO-8601
    end: string; // ISO-8601
  };
};

type Result = {
  uuid: string;
  startAt: TimeInterval;
  endAt: TimeInterval;
  value: number;
  unit: string;
  // TODO: CLEAN THIS UP FOR CATEGORY TYPES AND SERIES TYPES
  heartbeats?: { elapsed: number; precededByGap: boolean }[];
  // ECG
  samplingFrequency?: number;
  voltages?: number[][];
};

function ignite(
  // TODO: This can only handle Quanity and Category types right now.
  typeIdentifier:
    | ValueOf<typeof QuantityTypeIdentifier>
    | ValueOf<typeof CategoryTypeIdentifier>
    | ValueOf<typeof SeriesSampleIdentifier>,
  result: Result,
  subject: Subject
): Observation | undefined {
  const { uuid, startAt, endAt, value, unit: unitString } = result;

  if (HK.HKQuantity[typeIdentifier as ValueOf<typeof QuantityTypeIdentifier>]) {
    const sampleType = typeIdentifier as ValueOf<typeof QuantityTypeIdentifier>;
    const coding: CodeWithSystem[] = [];

    const hkc = HK.HKQuantity[sampleType];
    if (hkc) {
      const hkcArray = (Array.isArray(hkc) ? hkc : [hkc]) as Code[];
      hkcArray.forEach((o) => coding.push({ ...o, system: HKSystemURI }));
    }

    const lc = LOINC[sampleType];
    if (lc) {
      const lcArray = (Array.isArray(lc) ? lc : [lc]) as Code[];
      lcArray.forEach((o) => coding.push({ ...o, system: LOINCSystemURI }));
    }

    return {
      resourceType: 'Observation',
      status: 'final',
      identifier: [{ value: uuid, system: 'com.apple.health' }],
      code: { coding },
      subject,
      valueQuantity: {
        value,
        unit: unitString,
        code: UCOM[unitString as keyof typeof UCOM] || '{unknown}',
        system: UCOMSystemURI,
      },
      effectivePeriod: {
        start: new Date(startAt * 1000).toISOString(),
        end: new Date(endAt * 1000).toISOString(),
      },
    };
  } else if (
    HK.HKCategory[typeIdentifier as ValueOf<typeof CategoryTypeIdentifier>]
  ) {
    const sampleType = typeIdentifier as ValueOf<typeof CategoryTypeIdentifier>;
    const coding: CodeWithSystem[] = [];

    const hkc = HK.HKCategory[sampleType];
    if (hkc) {
      const hkcArray = (Array.isArray(hkc) ? hkc : [hkc]) as Code[];
      hkcArray.forEach((o) => coding.push({ ...o, system: HKSystemURI }));
    }

    // For now, just using value integer until I have guidance on the proper format
    // of enum values.
    return {
      resourceType: 'Observation',
      status: 'final',
      identifier: [{ value: uuid, system: 'com.apple.health' }],
      code: { coding },
      subject,
      valueInteger: value,
      effectivePeriod: {
        start: new Date(startAt * 1000).toISOString(),
        end: new Date(endAt * 1000).toISOString(),
      },
    };
  }
  // Heartbeat Series & Electrocardiogram
  else if (
    HK.HKSeries[typeIdentifier as ValueOf<typeof SeriesSampleIdentifier>]
  ) {
    const sampleType = typeIdentifier as ValueOf<typeof SeriesSampleIdentifier>;
    const coding: CodeWithSystem[] = [];

    const hkc = HK.HKSeries[sampleType];
    if (hkc) {
      const hkcArray = (Array.isArray(hkc) ? hkc : [hkc]) as Code[];
      hkcArray.forEach((o) => coding.push({ ...o, system: HKSystemURI }));
    }

    const obs: Observation = {
      resourceType: 'Observation',
      status: 'final',
      identifier: [{ value: uuid, system: 'com.apple.health' }],
      code: { coding },
      subject,
      effectivePeriod: {
        start: new Date(startAt * 1000).toISOString(),
        end: new Date(endAt * 1000).toISOString(),
      },
    };

    if (sampleType === 'HeartbeatSeries') {
      const { heartbeats } = result;
      obs.valueString = (heartbeats || [])
        .map((beat) => `${beat.elapsed}|${+beat.precededByGap}`)
        .join(' ');
    } else if (sampleType === 'Electrocardiogram') {
      const { samplingFrequency = 0, voltages = [] } = result;
      obs.valueSampledData = {
        origin: {
          value: 0,
          unit: 'mcV',
          code: UCOM.mcV,
          system: UCOMSystemURI,
        },
        period: samplingFrequency && 1000 / samplingFrequency,
        factor: 1,
        dimensions: 1,
        data: voltages.map((o: number[]) => o[1]).join(' '),
      };
    }

    return obs;
  }

  // Unsupported type, return
  return undefined;
}

export default ignite;
