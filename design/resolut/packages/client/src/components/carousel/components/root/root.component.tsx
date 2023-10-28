import CarouselRootComponent from './root.component.types'
import styles from './root.component.module.sass'

const CarouselRoot: CarouselRootComponent = memo(
    forwardRef(({ className = '', ...props }, ref) => {
        const classNames = `${className} ${styles.root}`

        return <div className={classNames} {...props} ref={ref} />
    })
)

export default CarouselRoot
