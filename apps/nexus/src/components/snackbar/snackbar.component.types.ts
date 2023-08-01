export type Placement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface SnackbarProps extends Omit<React.ComponentPropsWithRef<'div'>, 'role'> {
    placement?: Placement
    offset?: number
}

export type SnackbarRef = React.RefAttributes<HTMLDivElement>

type SnackbarComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<SnackbarRef & SnackbarProps>>

export default SnackbarComponent
