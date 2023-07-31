import { ComponentProps, FunctionComponent } from 'react'

interface MultiSelectProps extends ComponentProps<'div'> {
    options: { value: string; label: string }[]
    selected: string[]
    selectedChanged: (selected: string[]) => void
}

type MultiSelectComponent = FunctionComponent<MultiSelectProps>

export default MultiSelectComponent
