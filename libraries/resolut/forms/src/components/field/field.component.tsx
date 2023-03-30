import {
    Children,
    cloneElement,
    FormEvent,
    isValidElement,
    memo,
    ReactElement,
    ReactNode,
    useCallback,
    useMemo,
} from 'react';
import { useFormContext } from '../../hooks';

import FieldComponent from './field.component.types';
import propTypes from './field.component.proptypes';
import { getPropsByType, passPropsByType } from '../../utils';

const ELEMENTS = ['input', 'select', 'textarea'];

const getFieldProps = (children: ReactNode) => () =>
    getPropsByType(children, ['name', 'value'], ELEMENTS, 'RESOLUT_INPUT');

const Field: FieldComponent = ({ children }) => {
    const [state, dispatch] = useFormContext();

    const { name, value } = useMemo(getFieldProps(children), [children]);

    const onChange = useCallback(
        (event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            dispatch({ type: name, payload: { value: event.currentTarget.value, onChange } });
        },
        [dispatch]
    );

    const elements = passPropsByType(
        children,
        {
            value: state[name] ? state[name].value : value || '',
            onChange,
        },
        ELEMENTS,
        'RESOLUT_INPUT'
    );

    console.log(name, 'rerender...');

    return elements as any;
};

Field.displayName = 'Field';

Field.propTypes = propTypes;

export default memo(Field);
