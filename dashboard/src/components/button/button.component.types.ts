import { ComponentProps, FunctionComponent, ReactNode } from 'react'

interface ButtonComponentProps extends ComponentProps<'button'> {
    color?: 'primary' | 'secondary'
    children: ReactNode
}

type ButtonComponent = FunctionComponent<ButtonComponentProps>

export default ButtonComponent
