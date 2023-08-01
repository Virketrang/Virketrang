export default function localeToLanguageName(locale: Workspace.I18N.Locale) {
    switch (locale) {
        case 'da-DK':
            return 'Dansk'
        case 'en-GB':
            return 'English'
        default:
            throw Error('Unknown locale: could not get language name from locale')
    }
}
