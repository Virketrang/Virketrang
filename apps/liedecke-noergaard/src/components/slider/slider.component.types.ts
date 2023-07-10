import { Locale } from '@/types'

type SliderComponent = FunctionComponent<{
    minValue: string
    maxValue: string
    setMinValue: Dispatch<SetStateAction<string>>
    setMaxValue: Dispatch<SetStateAction<string>>
    locale: Locale
}>

export default SliderComponent
