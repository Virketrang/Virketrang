interface ButtonComponentProps extends React.ComponentProps<'button'> {
    color?: 'primary' | 'secondary'
    children: React.ReactNode
}

type ButtonComponent = React.FunctionComponent<ButtonComponentProps>

export default ButtonComponent
