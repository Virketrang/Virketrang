interface MultiSelectProps extends React.ComponentProps<'div'> {
    options: { value: string; label: string }[]
    selected: string[]
    selectedChanged: (selected: string[]) => void
}

type MultiSelectComponent = React.FunctionComponent<MultiSelectProps>

export default MultiSelectComponent
