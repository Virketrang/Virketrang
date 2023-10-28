import { forwardRef, memo } from 'react';

import InputFieldComponent from './input-field.component.types';

import Label from '../label/label.component';
import Input from '../input/input.component';
import Field from '../field/field.component';
import FormControl from '../form-control/form-control.component';

const InputField: InputFieldComponent = memo(
    forwardRef(({ name, shape = 'rounded', size = 'medium', label, className = '', ...props }, ref) => {
        return (
            <FormControl>
                <Field>
                    <Label htmlFor={name}>{label}</Label>
                    <Input shape={shape} className={className} name={name} {...props} ref={ref} />
                </Field>
            </FormControl>
        );
    })
);

InputField.displayName = 'InputField';

export default InputField;
