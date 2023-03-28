import { forwardRef } from 'react';

import { Props, Ref } from './field-group.component.types';

const FieldGroup = forwardRef<Ref, Props>(({ children, className = '', ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={`${className}`}>
            {children}
        </div>
    );
});

export default FieldGroup;
