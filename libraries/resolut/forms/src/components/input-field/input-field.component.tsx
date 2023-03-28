import InputFieldComponent from './input-field.component.types';
import styles from './input-field.component.module.sass';

const InputField: InputFieldComponent = ({ name, label, ...props }) => {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <input className={styles.input} name={name} {...props} />
        </div>
    );
};

export default InputField;
