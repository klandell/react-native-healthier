import type { QueryDescriptor } from "./Query";
import type UpdateFrequency from './constants/UpdateFrequency'

export type ValueOf<T> = T[keyof T];

export type TimeInterval = number; // Swift time interval since 1970

export type Code = {
  code: string;
  display: string;
};

export type CodeWithSystem = Code & { system: string };

export interface Healthier {
  isAvailable: () => Promise<boolean>;
  supportsHealthRecords: () => Promise<boolean>;
  requestAuthorization: (permissions: {
    toShare?: string[]; // TODO: Type
    read?: string[]; // TODO: Type
  }) => Promise<void>;
  execute: (query: QueryDescriptor) => Promise<any>;
  enableBackgroundDelivery: (
    dataTypeIdentifier: string,
    updateFrequency: ValueOf<typeof UpdateFrequency>
  ) => Promise<void>; // TODO: Type
  disableBackgroundDelivery: (dataTypeIdentifier: string) => Promise<void>; // TODO: Type
  disableAllBackgroundDelivery: 
}