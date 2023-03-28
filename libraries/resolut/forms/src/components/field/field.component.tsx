import { Children, cloneElement, FormEvent, memo, useCallback } from 'react';
import { findInput } from '../../utils';
import { useFormContext } from '../../hooks';

import FieldComponent from './field.component.types';

const Field: FieldComponent = ({ children }) => {
    const [state, dispatch] = useFormContext();

    const field = findInput(children, ['input', 'textarea', 'select']);
    const { name, value } = field.props;

    console.log('FIELD', 'rerender...');

    const onChange = useCallback(
        (event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            dispatch({ type: name, payload: { value: event.currentTarget.value, onChange } });
        },
        [dispatch]
    );

    return cloneElement(Children.only(field), { value: state[name] ? state[name].value : value || '', onChange });
};

export default memo(Field);
