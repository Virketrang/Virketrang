import { createElement, forwardRef } from 'react';

import styles from './typography.component.module.sass';
import TypographyComponent from './typography.component.types';

const Typography: TypographyComponent = forwardRef(
    ({ element = 'p', className = '', component = 'body1', children, align = 'inherit', style, ...props }, ref) => {
        const classNames = `${className} ${styles.typography} ${styles[component]}`;

        const dynamic = { '--typography-align': align };

        return createElement(
            element,
            { ref, className: classNames, style: { ...dynamic, ...style }, ...props },
            children
        );
    }
);

Typography.displayName = 'Typography';

export default Typography;
