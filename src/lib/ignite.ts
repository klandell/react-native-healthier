import HK, { HKSystemURI } from '../systems/HK';
import LOINC, { LOINCSystemURI } from '../systems/LOINC';
import type QuantityTypeIdentifier from '../constants/QuantityTypeIdentifier';
import type CategoryTypeIdentifier from '../constants/CategoryTypeIdentifier';
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
  valueInteger?: {
    value: number;
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
};

function ignite(
  // TODO: This can only handle Quanity and Category types right now.
  typeIdentifier:
    | ValueOf<typeof QuantityTypeIdentifier>
    | ValueOf<typeof CategoryTypeIdentifier>,
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
      valueInteger: { value },
      effectivePeriod: {
        start: new Date(startAt * 1000).toISOString(),
        end: new Date(endAt * 1000).toISOString(),
      },
    };
  }

  // Unsupported type, return
  return undefined;
}

export default ignite;
