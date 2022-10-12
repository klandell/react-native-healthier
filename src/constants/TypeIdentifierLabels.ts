// TODO: This is terrible, but I need a quick fix. Come back to this.
import type { ValueOf } from '../types';
import HK from '../systems/HK';
import type CategoryTypeIdentifier from './CategoryTypeIdentifier';
import type CorrelationTypeIdentifier from './CorrelationTypeIdentifier';
import type CharacteristicTypeIdentifier from './CharacteristicTypeIdentifier';
import type ClinicalTypeIdentifier from './ClinicalTypeIdentifier';
import type QuantityTypeIdentifier from './QuantityTypeIdentifier';
import type SeriesSampleIdentifier from './SeriesSampleIdentifier';

const {
  HKCategory,
  HKCharacteristic,
  HKClinical,
  HKCorrelation,
  HKQuantity,
  HKSeries,
} = HK;

const TypeIdentiferLabels: {
  [key in
    | ValueOf<typeof CategoryTypeIdentifier>
    | ValueOf<typeof CharacteristicTypeIdentifier>
    | ValueOf<typeof ClinicalTypeIdentifier>
    | ValueOf<typeof CorrelationTypeIdentifier>
    | ValueOf<typeof QuantityTypeIdentifier>
    | ValueOf<typeof SeriesSampleIdentifier>]: string;
} = {
  // CategoryTypeIdentifier
  ...Object.keys(HKCategory).reduce(
    (acc, key) => ({
      ...acc,
      [key]: HKCategory[key as ValueOf<typeof CategoryTypeIdentifier>]!.display,
    }),
    {} as { [k in ValueOf<typeof CategoryTypeIdentifier>]: string }
  ),
  // CharacteristicTypeIdentifier
  ...Object.keys(HKCharacteristic).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        HKCharacteristic[key as ValueOf<typeof CharacteristicTypeIdentifier>]!
          .display,
    }),
    {} as { [k in ValueOf<typeof CharacteristicTypeIdentifier>]: string }
  ),
  // ClinicalTypeIdentifier
  ...Object.keys(HKClinical).reduce(
    (acc, key) => ({
      ...acc,
      [key]: HKClinical[key as ValueOf<typeof ClinicalTypeIdentifier>]!.display,
    }),
    {} as { [k in ValueOf<typeof ClinicalTypeIdentifier>]: string }
  ),
  // CorrelationTypeIdentifier
  ...Object.keys(HKCorrelation).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        HKCorrelation[key as ValueOf<typeof CorrelationTypeIdentifier>]!
          .display,
    }),
    {} as { [k in ValueOf<typeof CorrelationTypeIdentifier>]: string }
  ),
  // QuantityTypeIdentifier
  ...Object.keys(HKQuantity).reduce(
    (acc, key) => ({
      ...acc,
      [key]: HKQuantity[key as ValueOf<typeof QuantityTypeIdentifier>]!.display,
    }),
    {} as { [k in ValueOf<typeof QuantityTypeIdentifier>]: string }
  ),
  // SeriesSampleIdentifier
  ...Object.keys(HKSeries).reduce(
    (acc, key) => ({
      ...acc,
      [key]: HKSeries[key as ValueOf<typeof SeriesSampleIdentifier>]!.display,
    }),
    {} as { [k in ValueOf<typeof SeriesSampleIdentifier>]: string }
  ),
};

export default TypeIdentiferLabels;
