import TextFieldComponent from './text-field.component.types';
import useFieldStyles from './text-field.component.styles';

const TextField: TextFieldComponent = ({ name, label, ...props }) => {
    const styles = useFieldStyles();

    return (
        <div className={styles.group}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <input className={styles.input} name={name} {...props} />
        </div>
    );
};

export default TextField;
