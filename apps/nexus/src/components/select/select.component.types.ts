import { ComponentProps, FunctionComponent } from 'react'

interface SelectComponentProps extends ComponentProps<'select'> {}

type SelectComponent = FunctionComponent<SelectComponentProps>

export default SelectComponent
