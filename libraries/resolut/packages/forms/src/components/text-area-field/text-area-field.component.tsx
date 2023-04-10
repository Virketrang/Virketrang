import { forwardRef, memo } from 'react';

import { Field, FormControl, Label, TextArea } from '..';

import TextAreaFieldComponent from './text-area-field.component.types';

const TextAreaField: TextAreaFieldComponent = memo(
    forwardRef(({ label = '', className = '', ...props }, ref) => {
        console.log(label);
        return (
            <FormControl>
                <Field>
                    <Label>{label}</Label>
                    <TextArea ref={ref} className={`${className}`} label={label} {...props} />
                </Field>
            </FormControl>
        );
    })
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
