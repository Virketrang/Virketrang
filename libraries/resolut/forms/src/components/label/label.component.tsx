import { forwardRef, memo } from 'react';

import LabelComponent from './label.component.types';

const Label: LabelComponent = forwardRef(({ children, className = '', ...props }, ref) => {
    return (
        <label ref={ref} {...props} className={`${className}`}>
            {children}
        </label>
    );
});

Label.displayName = 'Label';

export default memo(Label);
