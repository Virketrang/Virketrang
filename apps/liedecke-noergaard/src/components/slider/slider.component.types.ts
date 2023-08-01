type SliderComponent = FunctionComponent<{
    minValue: string
    maxValue: string
    setMinValue: Dispatch<SetStateAction<string>>
    setMaxValue: Dispatch<SetStateAction<string>>
    locale: Workspace.I18N.Locale
}>

export default SliderComponent
