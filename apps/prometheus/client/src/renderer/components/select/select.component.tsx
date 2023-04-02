import useSelectStyles from './select.component.styles';
import SelectComponent from './select.component.types';

const Select: SelectComponent = ({ className, options, label, name, ...props }) => {
    const styles = useSelectStyles();

    return (
        <>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <select name={name} className={`${className} ${styles.select}`} {...props}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
