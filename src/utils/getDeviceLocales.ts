import { NativeModules, Platform } from 'react-native';

export const getDeviceLocales = () =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

export const getDeviceLocaleShortCode = () => getDeviceLocales().split('_')[0];
