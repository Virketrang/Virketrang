import InputFieldComponent from './input-field.component.types'
import styles from './input-field.component.module.css'

const InputField: InputFieldComponent = memo(({ className = '', ...props }) => {
    return <input className={`${className} ${styles.field}`} {...props} />
})

InputField.displayName = InputField.name

export default InputField
