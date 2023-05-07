import { memo } from 'react'

import Github from '../../../public/github.png'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    preload: true
})

import Link from 'next/link'
import Image from 'next/image'

import { styles, AppNavigationComponent } from '.'

const AppNavigation: AppNavigationComponent = memo(({ locale, navigation }) => {
    return (
        <nav className={`${styles.nav} ${cormorantGaramond.className}`}>
            <Link href={`/${locale}/products`}>{navigation.products}</Link>
            <Link href={`/${locale}/team`}>{navigation.team}</Link>
            <Link href={`/${locale}/philosophy`}>{navigation.philosophy}</Link>
            <Link href={`/${locale}/contact`}>{navigation.contact}</Link>
            <Link href={`/${locale}/blog`}>{navigation.blog}</Link>
            <Link href={`/${locale}/earnings`}>{}</Link>
            <a href="https://github.com/virketrang">
                <Image alt="GitHub Logo" src={Github.src} width={24} height={24} />
            </a>
        </nav>
    )
})

export default AppNavigation
