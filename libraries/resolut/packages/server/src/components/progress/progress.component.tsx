import { forwardRef, memo } from 'react'

import ProgressComponent from './progress.component.types'
import { ClassAttribute } from 'utils/javascript'

const Progress: ProgressComponent = memo(
    forwardRef(({ type = 'info', className = '', ...props }, ref) => {
        const classNames = ClassAttribute(className, type)

        return <progress className={classNames} {...props} ref={ref} />
    })
)

export default Progress
