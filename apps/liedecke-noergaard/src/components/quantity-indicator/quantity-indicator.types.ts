import { FunctionComponent } from 'react'

import { Dictionary } from '@/types'

type QuantityIndicatorComponent = FunctionComponent<{
    id: string
    quantity: number
    dictionary: { pieces: string }
}>

export default QuantityIndicatorComponent
