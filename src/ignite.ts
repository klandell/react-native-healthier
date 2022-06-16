import LOINC, { LOINCSystemURI } from './constants/LOINC';
import TypeIdentifier, {
  HKSystemURI,
  QuantityTypeIdentifier,
} from './constants/TypeIdentifier';
import UCOM, { UCOMSystemURI } from './constants/UCOM';
import type { Code, CodeWithSystem, TimeInterval } from './types';

type Subject = {
  reference: string; // Literal reference, Relative, internal or absolute URL
};

type Observation = {
  resourceType: 'Observation';
  status: 'final';
  identifier: { value: string; system: string }[];
  code: { coding: CodeWithSystem[] };
  subject: Subject;
  valueQuantity: {
    value: number;
    unit: string;
    code: string;
    system: string;
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
  typeIdentifier: keyof typeof TypeIdentifier,
  result: Result,
  subject: Subject
): Observation | undefined {
  const { uuid, startAt, endAt, value, unit: unitString } = result;
  const indentityAsQuantity =
    typeIdentifier as keyof typeof QuantityTypeIdentifier;

  // Right now we are only handling HKQuantityTypeIdentifiers
  if (QuantityTypeIdentifier[indentityAsQuantity]) {
    const coding: CodeWithSystem[] = [
      { ...TypeIdentifier[typeIdentifier], system: HKSystemURI },
    ];

    const lc = LOINC[indentityAsQuantity];
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
        start: new Date(startAt).toISOString(),
        end: new Date(endAt).toISOString(),
      },
    };
  }

  // Unsupported type, return
  return undefined;
}

export default ignite;
