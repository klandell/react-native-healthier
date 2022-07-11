import { NativeModules, Platform } from 'react-native';
import type { Healthier } from './types';

const LINKING_ERROR =
  `The package 'react-native-healthier' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export default (NativeModules.RNHealthierModule
  ? NativeModules.RNHealthierModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    )) as Healthier;
