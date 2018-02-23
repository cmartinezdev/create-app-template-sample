import * as i18n from 'i18next';
import * as XHR from 'i18next-xhr-backend';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

const defaultNS = 'translations';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    fallbackLng: 'es',
    debug: false,

    ns: defaultNS,
    defaultNS,
    fallbackNS: defaultNS,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // Send to back the missing key
    // saveMissing: true,

    // react i18next special options (optional)
    react: {
      wait: false,
      // bindI18n: 'languageChanged loaded',
      // bindStore: 'added removed',
      nsMode: 'default',
    },

    initImmediate: false,
  });

export default i18n;
