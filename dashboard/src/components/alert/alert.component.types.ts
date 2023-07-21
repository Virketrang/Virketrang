import { Severity } from '@/types'

export interface AlertProps extends Omit<React.ComponentPropsWithRef<'div'>, 'role'> {
    severity?: Severity
    children: string
    id: string
    duration?: number
}

export type AlertRef = React.RefAttributes<HTMLDivElement>

type AlertComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<AlertRef & AlertProps>>

export default AlertComponent
