import { forwardRef, memo } from 'react';

import OptionComponent from './option.component.types';
import propTypes from './option.component.proptypes';
import { option } from './option.component.module.sass';

const Option: OptionComponent = forwardRef(({ children, className, ...props }, ref) => {
    return (
        <option className={`${option} ${className && className}`} ref={ref} {...props}>
            {children}
        </option>
    );
});

Option.displayName = 'Option';

Option.propTypes = propTypes;

export default memo(Option);
