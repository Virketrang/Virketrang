import { Children, cloneElement, FormEvent, useState } from 'react';
import propTypes from './field.component.proptypes';
import FieldComponent from './field.component.types';

const Field: FieldComponent = ({ children }) => {
    const [value, setValue] = useState('Hello');
    const onChange = (event: FormEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return cloneElement(Children.only(children), { value, onChange });
};

Field.propTypes = propTypes;

export default Field;
