import AuthorizationRequestStatus from './constants/AuthorizationRequestStatus';
import type { Healthier } from './types';

export default {
  isAvailable: () => Promise.resolve(false),
  supportsHealthRecords: () => Promise.resolve(false),
  getRequestStatusForAuthorization: () =>
    Promise.resolve(AuthorizationRequestStatus.Unknown),
  requestAuthorization: () => Promise.resolve(),
  execute: () => Promise.resolve([]),
  enableBackgroundDelivery: () => Promise.resolve(),
  disableBackgroundDelivery: () => Promise.resolve(),
  disableAllBackgroundDelivery: () => Promise.resolve(),
} as Healthier;
