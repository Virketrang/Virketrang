import useTextareaStyles from './textarea.component.styles';
import TextareaComponent from './textarea.component.types';

const Textarea: TextareaComponent = ({ name, label, ...props }) => {
    const styles = useTextareaStyles();

    return (
        <div className={styles.group}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <textarea className={styles.input} name={name} {...props}></textarea>
        </div>
    );
};

export default Textarea;
