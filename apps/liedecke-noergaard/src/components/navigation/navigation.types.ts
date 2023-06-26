import { FunctionComponent } from 'react'

import { Dictionary } from '@/types'

type NavigationComponent = FunctionComponent<{
    dictionary: Dictionary<'navigation'>
}>

export default NavigationComponent
