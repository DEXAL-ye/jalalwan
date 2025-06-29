import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

// Get saved language or browser default
const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language.split('-')[0]
const defaultLang = ['ar', 'en'].includes(browserLang) ? browserLang : 'en'

export default createI18n({
    legacy: false,
    locale: savedLang || defaultLang,
    fallbackLocale: 'en',
    messages: { en, ar }
})