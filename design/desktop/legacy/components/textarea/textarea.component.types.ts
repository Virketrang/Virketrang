interface TextareaComponentProps extends React.ComponentProps<'textarea'> {
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'
}

type TextareaComponent = React.FunctionComponent<TextareaComponentProps>

export default TextareaComponent
