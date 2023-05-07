import { ResolutComponent, Size } from 'types/index'
import { ComponentPropsWithoutRef, ReactElement, RefAttributes } from 'react'

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'prefix' | 'size'> {
    prefix?: ReactElement | string
    suffix?: ReactElement | string
    size?: Size
    inputSize?: number
    inputPrefix?: string
}

export type InputRef = RefAttributes<HTMLInputElement>

type InputComponent = ResolutComponent<InputProps & InputRef>

export default InputComponent
