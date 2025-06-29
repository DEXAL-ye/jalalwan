import i18n from '../i18n'  
export const setLanguage = (lang: 'en' | 'ar') => {
    // Set i18n locale
    i18n.global.locale.value = lang

    // Save preference
    localStorage.setItem('lang', lang)

    // Update document attributes
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'

    // Update page title
    document.title = i18n.global.t('pageTitle')
}

// Initialize on app start
export const initLanguage = () => {
    const lang = i18n.global.locale.value as 'en' | 'ar'
    setLanguage(lang)
}