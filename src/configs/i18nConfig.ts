import i18next, {
  Resource,
  LanguageDetectorAsyncModule,
  InitOptions,
} from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enAuth, enCommon, enDashboard, enReceipt } from '../consts/locales/en';
import { plAuth, plCommon, plDashboard, plReceipt } from '../consts/locales/pl';
import { getDeviceLocaleShortCode } from '../utils/getDeviceLocales';

export const DEFAULT_NAMESPACE = 'common';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NAMESPACE;
    resources: {
      common: typeof plCommon;
      auth: typeof plAuth;
      dashboard: typeof plDashboard;
      receipt: typeof plReceipt;
    };
    returnNull: false;
  }
}

const enResources = {
  common: enCommon,
  auth: enAuth,
  dashboard: enDashboard,
  receipt: enReceipt,
};

const plResources = {
  common: plCommon,
  auth: plAuth,
  dashboard: plDashboard,
  receipt: plReceipt,
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
  ns: ['common', 'auth', 'dashboard', 'receipt'],
  defaultNS: DEFAULT_NAMESPACE,
  resources,
  returnNull: false,
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init(initOptions)
  .catch((error: any) => console.error(error));
