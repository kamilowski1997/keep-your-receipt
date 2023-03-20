import i18next, {
  Resource,
  LanguageDetectorAsyncModule,
  InitOptions,
} from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enAuth, enCommon } from '../consts/locales/en';
import { plAuth, plCommon } from '../consts/locales/pl';
import { getDeviceLocaleShortCode } from '../utils/getDeviceLocales';

export const DEFAULT_NAMESPACE = 'common';

declare module 'react-i18next' {
  interface Resources {
    common: typeof plCommon;
    auth: typeof plAuth;
  }
}

const enResources = {
  common: enCommon,
  auth: enAuth,
};

const plResources = {
  common: plCommon,
  auth: plAuth,
};

const resources: Resource = {
  en: enResources,
  pl: plResources,
};

const detectLocale = (callback: (lng: string) => void) => {
  return callback(getDeviceLocaleShortCode());
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  detect: detectLocale,
  async: true,
  init: () => {},
  cacheUserLanguage: () => {},
};

const initOptions: InitOptions = {
  compatibilityJSON: 'v3',
  fallbackLng: ['en'],
  nonExplicitSupportedLngs: true,
  ns: ['common', 'auth'],
  defaultNS: DEFAULT_NAMESPACE,
  resources,
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init(initOptions)
  .catch((error: any) => console.error(error));
