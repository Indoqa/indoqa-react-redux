import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        Vienna: 'Vienna',
        'New York': 'New York',
        and: 'and',
        'Invalid Location': 'Invalid location',
        Clear: 'Clear',
      },
    },
    de: {
      translations: {
        Vienna: 'Wien',
        and: 'und',
        'Invalid Location': 'Ungültiger Ort',
        Clear: 'Zurücksetzen',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
})

export default i18n
