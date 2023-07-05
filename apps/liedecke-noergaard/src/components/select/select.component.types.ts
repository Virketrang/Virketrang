import { FunctionComponent, ComponentProps } from 'react'

interface SelectComponentProps extends ComponentProps<'select'> {}

type SelectComponent = FunctionComponent<SelectComponentProps>

export default SelectComponent
