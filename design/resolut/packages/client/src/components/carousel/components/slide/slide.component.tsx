import SlideComponent from './slide.component.types'
import styles from './slide.component.module.sass'

const Slide: SlideComponent = memo(
    forwardRef(({ className = '', ...props }, ref) => {
        return <div className={`${className} ${styles.slide}`} {...props} ref={ref} />
    })
)

export default Slide
