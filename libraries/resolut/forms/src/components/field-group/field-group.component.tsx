import { forwardRef, memo } from 'react';

import FieldGroupComponent from './field-group.component.types';
import styles from './field-group.component.module.sass';

const FieldGroup: FieldGroupComponent = forwardRef(({ children, className = '', ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={`${className} ${styles.fieldGroup}`}>
            {children}
        </div>
    );
});

FieldGroup.displayName = 'FieldGroup';

export default memo(FieldGroup);
