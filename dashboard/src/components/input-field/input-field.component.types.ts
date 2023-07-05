import { ComponentProps, FunctionComponent } from 'react'

interface InputFieldProps extends ComponentProps<'input'> {}

type InputFieldComponent = FunctionComponent<InputFieldProps>

export default InputFieldComponent
