import { forwardRef, memo } from 'react';

import SelectFieldComponent from './select-field.component.types';
import styles from './select-field.component.module.sass';

import { Field, FormControl, Label, Select } from '..';

const SelectField: SelectFieldComponent = forwardRef(({ children, name, label, className = '', ...props }, ref) => {
    return (
        <FormControl>
            <Field>
                <Label>{label}</Label>
                <Select ref={ref} {...props} name={name} className={`${styles.select} ${className}`} label={label}>
                    {children}
                </Select>
            </Field>
        </FormControl>
    );
});

SelectField.displayName = 'SelectField';

export default memo(SelectField);
