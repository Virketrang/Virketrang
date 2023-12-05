interface Config<T extends readonly string[]> {
    defaultLocale: I18N.Locale
    locales: T
}

export default Config
