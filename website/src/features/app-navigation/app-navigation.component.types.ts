import { FunctionComponent } from 'react'

import { Locale } from '@types'

export interface AppNavigationProps {
    locale: Locale
    navigation: {
        products: string
        team: string
        philosophy: string
        contact: string
        blog: string
        earnings: string
    }
}

type AppNavigationComponent = FunctionComponent<AppNavigationProps>

export default AppNavigationComponent
