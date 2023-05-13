import { FunctionComponent } from 'react'

import { Locale } from '@types'

export interface AppToolbarProps {
    locale: Locale
}

type AppToolbarComponent = FunctionComponent<AppToolbarProps>

export default AppToolbarComponent
