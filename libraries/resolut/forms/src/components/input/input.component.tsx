import { forwardRef } from 'react';

import InputComponent from './input.component.types';

const Input: InputComponent = forwardRef((props, ref) => {
    return <input />;
});

export default Input;
