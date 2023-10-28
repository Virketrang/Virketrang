import { forwardRef, memo } from 'react';

import styles from './form-control.component.module.sass';
import FormControlComponent from './form-control.component.types';

const FormControl: FormControlComponent = memo(
    forwardRef(({ children, className = '', direction = 'column', style, ...props }, ref) => {
        return (
            <div
                className={`${styles.formControl} ${className}`}
                ref={ref}
                {...props}
                style={{ flexDirection: direction, ...style }}>
                {children}
            </div>
        );
    })
);

FormControl.displayName = 'FormControl';

export default FormControl;
