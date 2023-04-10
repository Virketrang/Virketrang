import { forwardRef, memo } from 'react';

import FormControl from '../form-control/form-control.component';
import ImageInputFieldComponent from './image-input-field.component.types';
import styles from './image-input-field.component.module.sass';

import { Field, ImageInput, ImagePreview, Label } from '..';

const ImageInputField: ImageInputFieldComponent = memo(
    forwardRef(
        ({ label, className = '', preview = false, size = 'medium', shape = 'rounded', name, ...props }, ref) => {
            return (
                <FormControl>
                    <Field>
                        <Label>{label}</Label>
                        <ImageInput shape={shape} className={className} name={name} {...props} ref={ref} />
                        {preview && <ImagePreview fieldName={name} />}
                    </Field>
                </FormControl>
            );
        }
    )
);

export default ImageInputField;
