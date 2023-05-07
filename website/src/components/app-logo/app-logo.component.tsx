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

const AppLogo: AppLogoComponent = memo(() => {
    return (
        <div className={logo}>
            <Image alt="Logo" width={32} height={32} src={Logo.src} />
            <h4 className={cormorantGaramond.className} style={{ fontWeight: 700 }}>
                Virketrang
            </h4>
        </div>
    )
})

export default AppLogo
