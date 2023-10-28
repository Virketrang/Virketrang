import { ComponentPropsWithoutRef, RefAttributes } from 'react'
import { ResolutComponent } from 'types/other'

type Type = 'error' | 'warning' | 'info' | 'success'

export interface ProgressProps extends ComponentPropsWithoutRef<'progress'> {
    type?: Type
}

export type ProgressRef = RefAttributes<HTMLProgressElement>

type ProgressComponent = ResolutComponent<ProgressProps & ProgressRef>

export default ProgressComponent
