import { memo } from 'react'

import Image from 'next/image'

import { Cormorant_Garamond } from 'next/font/google'
import Logo from '../../../public/logo.png'

const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    preload: true
})

import AppLogoComponent from './app-logo.component.types'
import { logo } from './app-logo.component.module.sass'
import Link from 'next/link'

const AppLogo: AppLogoComponent = memo(({ locale }) => {
    return (
        <Link href={`/${locale}`} className={logo}>
            <Image alt="Logo" width={24} height={24} src={Logo.src} />
            <h4 className={cormorantGaramond.className} style={{ fontWeight: 700 }}>
                Virketrang
            </h4>
        </Link>
    )
})

export default AppLogo
