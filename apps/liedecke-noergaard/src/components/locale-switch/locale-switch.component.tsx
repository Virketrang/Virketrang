'use client'
import { i18n } from '@/config/index'
import { localeToLanguageName, redirectedPathname } from '@/common'
import { LocaleFlag } from '@/components'

import LocaleSwitchComponent from './locale-switch.types'
import styles from './locale-switch.module.scss'

const LocaleSwitch: LocaleSwitchComponent = memo(({ currentLocale }) => {
    const pathname = usePathname()
    const router = useRouter()
    const otherLocales = i18n.locales.filter((locale) => locale !== currentLocale)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(redirectedPathname(pathname, event.target.value))
    }

    return (
        <div className={styles.localeSwitch}>
            <LocaleFlag locale={currentLocale} />
            <select
                name="locale-switch"
                id="locale-switch"
                onChange={handleChange}
                className={styles.select}
                defaultValue={currentLocale}
            >
                <option value={currentLocale}>{localeToLanguageName(currentLocale)}</option>
                {otherLocales.map((locale) => (
                    <option key={locale} value={locale}>
                        {localeToLanguageName(locale)}
                    </option>
                ))}
            </select>
        </div>
    )
})

LocaleSwitch.displayName = 'LocaleSwitch'

export default LocaleSwitch
