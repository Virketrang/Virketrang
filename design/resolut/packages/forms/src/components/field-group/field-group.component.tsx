import { forwardRef, memo } from 'react';

import FieldGroupComponent from './field-group.component.types';
import styles from './field-group.component.module.sass';

const FieldGroup: FieldGroupComponent = memo(
    forwardRef(({ children, className = '', gap = '0px', direction = 'horizontal', style, ...props }, ref) => {
        const dynamicStyles = {
            '--field-group-gap': gap,
            'field-group-direction': direction === 'horizontal' ? 'row' : 'column',
        };

        return (
            <div
                ref={ref}
                {...props}
                style={{ ...dynamicStyles, ...style }}
                className={`${className} ${styles.fieldGroup}`}>
                {children}
            </div>
        );
    })
);

FieldGroup.displayName = 'FieldGroup';

export default FieldGroup;
