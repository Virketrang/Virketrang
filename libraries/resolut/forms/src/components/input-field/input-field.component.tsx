import { memo } from 'react';

import InputFieldComponent from './input-field.component.types';
import styles from './input-field.component.module.sass';

import Label from '../label/label.component';
import Input from '../input/input.component';
import Field from '../field/field.component';
import FormControl from '../form-control/form-control.component';

const InputField: InputFieldComponent = ({ name, label, ref, ...props }) => {
    console.log('INPUT FIELD RENDERING... ', name);
    return (
        <FormControl className={styles.field}>
            <Field>
                <Label className={styles.label} htmlFor={name}>
                    {label}
                </Label>
                <Input className={styles.input} name={name} {...props} />
            </Field>
        </FormControl>
    );
};

InputField.displayName = 'InputField';

export default memo(InputField);
