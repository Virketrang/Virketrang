import { forwardRef, memo } from 'react';

import LabelComponent from './label.component.types';
import styles from './label.component.module.sass';

const Label: LabelComponent = memo(
    forwardRef(({ children, className = '', fontWeight = 'bold', style, ...props }, ref) => {
        const dynamic: any = { '--label-font-weight': fontWeight };

        return (
            <label ref={ref} {...props} className={`${className} ${styles.label}`} style={{ ...dynamic, ...style }}>
                {children}
            </label>
        );
    })
);

Label.displayName = 'Label';

export default Label;
