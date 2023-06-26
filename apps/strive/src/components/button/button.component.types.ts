import { FunctionComponent } from 'react'
import { PressableProps } from 'react-native/types'

export interface ButtonComponentProps extends PressableProps {
    children: string
    color?: string
    backgroundColor?: string
    shape?: 'rounded' | 'square'
    size?: 'small' | 'medium' | 'large'
    stretch?: boolean
    elevation?: number
}

type ButtonComponent = FunctionComponent<ButtonComponentProps>

export default ButtonComponent
