import { forwardRef, memo, DragEvent } from 'react'

import { ClassAttribute } from 'utils/index'

import { draggable } from './draggable.component.module.sass'
import DraggableComponent from './draggable.component.types'

const Draggable: DraggableComponent = memo(
    forwardRef(({ className = '', onDrag, ...props }, ref) => {
        const classNames = ClassAttribute(className, draggable)

        const onDragHandler = (event: DragEvent<HTMLDivElement>) => {
            onDrag && onDrag(event)
            console.log('DRAG')
        }

        return <div onDrag={onDragHandler} className={classNames} draggable {...props} ref={ref} />
    })
)

Draggable.displayName = 'Draggable'

export default Draggable
