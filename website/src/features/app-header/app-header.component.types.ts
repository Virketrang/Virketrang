import { FunctionComponent } from 'react'

import { Locale } from '@types'

export interface AppHeaderProps {
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

type AppHeaderComponent = FunctionComponent<AppHeaderProps>

export default AppHeaderComponent
