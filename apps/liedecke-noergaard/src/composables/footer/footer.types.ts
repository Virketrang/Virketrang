import { FunctionComponent } from 'react'

import { Dictionary, Locale } from '@/types'

type FooterComponent = FunctionComponent<{
    dictionary: Dictionary<'footer'>
    locale: Locale
}>

export default FooterComponent
