import { forwardRef, memo } from 'react';
import propTypes from './input.component.proptypes';

import InputComponent from './input.component.types';

const Input: InputComponent = memo(
    forwardRef(({ __type = 'RESOLUT_INPUT', ...props }, ref) => {
        console.log('INPUT RENDERING...', props.name);
        return <input {...props} ref={ref} />;
    })
);

Input.displayName = 'Input';

Input.propTypes = propTypes;

Input.defaultProps = {
    __type: 'RESOLUT_INPUT',
};

export default Input;
