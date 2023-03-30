import { forwardRef, memo } from 'react';

import SelectComponent from './select.component.types';
import styles from './select.component.module.sass';
import propTypes from './select.component.proptypes';

const Select: SelectComponent = memo(
    forwardRef(({ children, multiple = false, className = '', __type = 'RESOLUT_INPUT', ...props }, ref) => {
        return (
            <select ref={ref} {...props} className={`${className} ${styles.select}`}>
                {children}
            </select>
        );
    })
);

Select.displayName = 'Select';

Select.propTypes = propTypes;

Select.defaultProps = {
    __type: 'RESOLUT_INPUT',
};

export default Select;
