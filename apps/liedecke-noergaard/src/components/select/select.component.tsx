import SelectComponent from './select.component.types'
import styles from './select.component.module.scss'

const Select: SelectComponent = memo(({ className = '', ...props }) => {
    return (
        <div>
            <select className={`${className} ${styles.select}`} {...props} />
        </div>
    )
})

Select.displayName = Select.name

export default Select
