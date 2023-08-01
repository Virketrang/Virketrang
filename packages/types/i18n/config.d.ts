interface Config<T extends readonly string[]> {
    defaultLocale: Workspace.I18N.Locale
    locales: T
}

export default Config
