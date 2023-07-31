import { ComponentPropsWithRef, ForwardRefExoticComponent, MemoExoticComponent, RefAttributes } from 'react'

export type Placement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface SnackbarProps extends Omit<ComponentPropsWithRef<'div'>, 'role'> {
    placement?: Placement
    offset?: number
}

export type SnackbarRef = RefAttributes<HTMLDivElement>

type SnackbarComponent = MemoExoticComponent<ForwardRefExoticComponent<SnackbarRef & SnackbarProps>>

export default SnackbarComponent
