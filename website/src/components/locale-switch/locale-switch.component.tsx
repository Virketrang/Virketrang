'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

import styles from './locale-switch.component.module.sass'
import LocaleSwitchComponent from './locale-switch.component.types'

import { i18n } from '@i18n'
import { Locale } from '@/types'

const localeToCountry = (locale: Locale) => {
    switch (locale) {
        case 'da':
            return '🇩🇰 Dansk'
        case 'de':
            return '🇩🇪 Deutch'
        case 'en':
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
