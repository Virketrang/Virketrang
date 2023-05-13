import { FunctionComponent } from 'react'

import { Locale } from '@types'

export interface AppLogoProps {
    locale: Locale
}

type AppLogoComponent = FunctionComponent<AppLogoProps>

export default AppLogoComponent
