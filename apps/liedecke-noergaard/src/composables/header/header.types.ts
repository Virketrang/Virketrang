import { FunctionComponent } from 'react'

import { Dictionary } from '@/types'

type HeaderComponent = FunctionComponent<{
    dictionary: Dictionary<'navigation'>
}>

export default HeaderComponent
