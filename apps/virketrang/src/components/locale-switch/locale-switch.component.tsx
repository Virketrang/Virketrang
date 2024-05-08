'use client'

import { i18n } from '@/config'

import styles from './locale-switch.component.module.sass'
import LocaleSwitchComponent from './locale-switch.component.types'

const localeToCountry = (locale: Workspace.I18N.Locale) => {
    switch (locale) {
        case 'da-DK':
            return '🇩🇰 Dansk'
        case 'en-GB':
            return '🇬🇧 English'
    }
}

const LocaleSwitch: LocaleSwitchComponent = (props) => {
    const [open, setOpen] = useState<boolean>(false)
    const pathName = usePathname()

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <div className={styles.switch}>
            <span className={styles.locale} onClick={() => setOpen((prev) => !prev)}>
                {localeToCountry(props.locale)}
            </span>
            <div className={styles.menu} data-state-open={open}>
                {i18n.locales.map((locale) => (
                    <Link key={locale} href={redirectedPathName(locale)} aria-selected={locale === props.locale}>
                        {localeToCountry(locale)}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LocaleSwitch
