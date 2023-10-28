import { Children, forwardRef, isValidElement, memo, ReactNode, useState } from 'react';

import SelectComponent from './select.component.types';
import styles from './select.component.module.sass';

const extractOptions = (children: ReactNode) =>
    Children.map(children, child => {
        if (!isValidElement(child)) throw Error('Select component children must be of type Option');

        const props: { value: string; children: string } = child.props as any;

        if (!props) throw Error('No props was provided');

        if (!props.value || !props.children) throw Error('Option must have a children and value prop');

        return { value: props.value, label: props.children };
    });

const Select: SelectComponent = memo(
    forwardRef(
        (
            {
                children,
                multiple = false,
                className = '',
                __type = 'RESOLUT_INPUT',
                disabled = false,
                status,
                options,
                stretch = false,
                loading = false,
                size = 'medium',
                type = 'custom',
                ...props
            },
            ref
        ) => {
            const [open, setOpen] = useState(false);

            const extractedOptions = options ? options : extractOptions(children);

            const classNames = `resolut-select ${styles.select}`;

            return (
                <div
                    className={classNames}
                    role="listbox"
                    aria-expanded={open}
                    tabIndex={0}
                    onClick={() => setOpen(prev => !prev)}>
                    <span className={styles.value}>Value</span>
                    <button aria-hidden={open} className={styles.clearButton}>
                        &times;
                    </button>
                    <div className={styles.divider}></div>
                    <div className={styles.caret}></div>
                    <ul className={`${styles.options} ${open && styles.show}`} hidden={!open}>
                        {extractedOptions &&
                            extractedOptions.map(option => (
                                <li role="option" key={option.label} className={styles.option} aria-selected="false">
                                    {option.label}
                                </li>
                            ))}
                    </ul>
                </div>
            );
        }
    )
);

Select.displayName = 'Select';

Select.defaultProps = {
    __type: 'RESOLUT_INPUT',
};

export default Select;
