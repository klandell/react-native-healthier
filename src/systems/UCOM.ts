// THE UNIFIED CODE FOR UNITS OF MEASURE

export const UCOMSystemURI = 'http://unitsofmeasure.org';

const UCOM = {
  '%': '%',
  'cm': 'cm',
  'count': '{count}',
  'count/min': '{count}/min',
  'dBASPL': 'B[SPL]',
  'degC': 'Cel',
  'g': 'g',
  'IU': '[IU]',
  'kcal': 'kcal',
  'kcal/(kg.hr)': 'kcal/(kg.hr)',
  'kg': 'kg',
  'km': 'km',
  'km/hr': 'km/h',
  'L': 'L',
  'L/min': 'L/min',
  'm': 'm',
  'm/s': 'm/s',
  'mcg': 'ug',
  'mcS': 'uS',
  'mcV': 'uV',
  'mg': 'mg',
  'mg/dL': 'mg/dL',
  'min': 'min',
  'mL': 'mL',
  'mL/(kg.min)': 'mL/(kg.min)',
  'mmHg': 'mm[Hg]',
  'ms': 'ms',
  'W': 'W',
} as const;

export default UCOM;
