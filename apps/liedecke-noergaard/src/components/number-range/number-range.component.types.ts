import { Currency } from '@/liedecke-noergaard/types'

type NumberRangeComponent = React.FunctionComponent<{
    minValue: string
    maxValue: string
    setMinValue: React.Dispatch<React.SetStateAction<string>>
    setMaxValue: React.Dispatch<React.SetStateAction<string>>
    currency: Currency
    locale: Workspace.I18N.Locale
}>

export default NumberRangeComponent
