import { ComponentProps, FunctionComponent } from 'react'

interface OptionComponentProps extends ComponentProps<'option'> {}

type OptionComponent = FunctionComponent<OptionComponentProps>

export default OptionComponent
