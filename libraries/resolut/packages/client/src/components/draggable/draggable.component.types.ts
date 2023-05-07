import { ComponentPropsWithoutRef, RefAttributes } from 'react'
import { ResolutComponent } from 'types/index'

export interface DraggableProps extends Omit<ComponentPropsWithoutRef<'div'>, 'draggable'> {}

export type DraggableRef = RefAttributes<HTMLDivElement>

type DraggableComponent = ResolutComponent<DraggableProps & DraggableRef>

export default DraggableComponent
