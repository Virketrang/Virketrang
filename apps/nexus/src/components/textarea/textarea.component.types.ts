import { ComponentProps, FunctionComponent } from 'react'

interface TextareaComponentProps extends ComponentProps<'textarea'> {
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'
}

type TextareaComponent = FunctionComponent<TextareaComponentProps>

export default TextareaComponent
