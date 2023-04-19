import { forwardRef, memo } from 'react';

import '@/styles/base.sass';
import '@/styles/size.sass';

import InputComponent from './input.component.types';
import styles from './input.component.module.sass';

const Input: InputComponent = memo(
    forwardRef(({ className = '', size = 'medium', shape = 'square', ...props }, ref) => {
        return <input className={`${styles.input} ${className} ${size} ${shape}`} {...props} ref={ref} />;
    })
);

Input.displayName = 'Input';

export default Input;
