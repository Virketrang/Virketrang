import { forwardRef } from 'react';
import ButtonGroupComponent from './button-group.component.types';
import styles from './button-group.component.module.sass';

const ButtonGroup: ButtonGroupComponent = forwardRef(({ children, className = '', ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={`${className} ${styles.buttonGroup}`}>
            {children}
        </div>
    );
});

ButtonGroup;

export default ButtonGroup;
