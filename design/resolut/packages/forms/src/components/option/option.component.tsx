import { forwardRef, memo } from 'react';

import OptionComponent from './option.component.types';
import styles from './option.component.module.sass';

const Option: OptionComponent = memo(
    forwardRef(({ className = '', children = '', ...props }, ref) => {
        return (
            <option
                label={children.toString()}
                className={`${styles.option} ${className && className}`}
                ref={ref}
                {...props}>
                {children}
            </option>
        );
    })
);

Option.displayName = 'Option';

export default Option;
