import SelectComponent from './select.component.types'
import styles from './select.component.module.css'

const Select: SelectComponent = memo(({ className = '', ...props }) => {
    return (
        <div className={styles.wrapper}>
            <select className={`${className} ${styles.select}`} {...props} />
        </div>
    )
})

Select.displayName = Select.name

export default Select
