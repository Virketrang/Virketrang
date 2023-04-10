import { FormEvent, memo, ReactNode, useCallback } from 'react';
import { useFormContext } from '../../hooks';

import FieldComponent from './field.component.types';
import { getPropsByType, passPropsByType } from '../../utils';

const ELEMENTS = ['input', 'select', 'textarea'];

const getFieldProps = (children: ReactNode) =>
    getPropsByType(children, ['name', 'value', '__is_file_input'], ELEMENTS, 'RESOLUT_INPUT');

const Field: FieldComponent = ({ children }) => {
    const [state, dispatch] = useFormContext();

    const { name, value, __is_file_input } = getFieldProps(children);

    const onChange = useCallback(
        (event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            if (event.currentTarget.type === 'file') {
                const fileEvent = event as unknown as FormEvent<HTMLInputElement>;
                dispatch({ type: name, payload: { value: fileEvent.currentTarget.files!, onChange } });
            } else {
                dispatch({ type: name, payload: { value: event.currentTarget.value, onChange } });
            }
        },
        [dispatch]
    );

    const props = __is_file_input
        ? { onChange }
        : {
              value: state[name] ? state[name].value : value || '',
              onChange,
          };

    const elements = passPropsByType(children, props, ELEMENTS, 'RESOLUT_INPUT');

    return elements as any;
};

Field.displayName = 'Field';

export default memo(Field);
