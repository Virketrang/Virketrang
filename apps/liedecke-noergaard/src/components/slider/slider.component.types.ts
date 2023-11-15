type SliderComponent = FunctionComponent<{
    minValue: string
    maxValue: string
    setMinValue: Dispatch<SetStateAction<string>>
    setMaxValue: Dispatch<SetStateAction<string>>
    locale: I18N.Locale
}>

export default SliderComponent
