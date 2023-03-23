import FieldComponent from './field.component.types';
import { createElement } from 'react';

const Field: FieldComponent = ({ name, component, ...props }) => {
    return createElement(component, { name, ...props }, null);
};

export default Field;
