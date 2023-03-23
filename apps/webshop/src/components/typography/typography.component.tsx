import { createElement, forwardRef } from 'react';

import styles from './typography.component.module.sass';
import { Props, Ref } from './typography.component.types';

const Typography = forwardRef<Ref, Props>(
    ({ element = 'p', className = '', component = 'body1', children, ...props }, ref) => {
        return createElement(
            element,
            { ref, className: `${className} ${styles.typography} ${styles[component]}`, ...props },
            children
        );
    }
);

export default Typography;
