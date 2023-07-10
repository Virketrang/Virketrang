import { Currency, Locale } from '@/types'

type NumberRangeComponent = React.FunctionComponent<{
    minValue: string
    maxValue: string
    setMinValue: React.Dispatch<React.SetStateAction<string>>
    setMaxValue: React.Dispatch<React.SetStateAction<string>>
    currency: Currency
    locale: Locale
}>

export default NumberRangeComponent
