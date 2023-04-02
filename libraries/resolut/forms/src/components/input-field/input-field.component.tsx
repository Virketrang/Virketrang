import { memo } from 'react';

import InputFieldComponent from './input-field.component.types';
import styles from './input-field.component.module.sass';

import Label from '../label/label.component';
import Input from '../input/input.component';
import Field from '../field/field.component';
import FormControl from '../form-control/form-control.component';

const InputField: InputFieldComponent = ({ name, label, ref, className = '', ...props }) => {
    return (
        <FormControl className={styles.formControl}>
            <Field>
                <Label className={styles.label} htmlFor={name}>
                    {label}
                </Label>
                <Input className={`${styles.input} ${className}`} name={name} {...props} />
            </Field>
        </FormControl>
    );
};

InputField.displayName = 'InputField';

export default memo(InputField);
