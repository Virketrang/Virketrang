import { forwardRef } from 'react';

import SelectComponent from './select.component.types';
import {
    label as labelStyles,
    select as selectStyles,
    formControl as formControlStyles,
} from './select.component.module.sass';

const Select: SelectComponent = forwardRef(({ children, name, label, className, ...props }, ref) => {
    const { formControl, label: formLabel, select } = className || {};

    return (
        <div className={`${formControlStyles} ${formControl && formControl}`}>
            <label htmlFor={name} className={`${labelStyles} ${formLabel && formLabel}`}>
                {label}
            </label>
            <select ref={ref} {...props} name={name} className={`${selectStyles} ${select && select}`}>
                {children}
            </select>
        </div>
    );
});

export default Select;
