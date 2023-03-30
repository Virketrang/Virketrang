import { createElement, forwardRef } from 'react';

import styles from './typography.component.module.sass';
import propTypes from './typography.component.proptypes';
import TypographyComponent, { Props, Ref } from './typography.component.types';

const Typography: TypographyComponent = forwardRef(
    ({ element = 'p', className = '', component = 'body1', children, ...props }, ref) => {
        return createElement(
            element,
            { ref, className: `${className} ${styles.typography} ${styles[component]}`, ...props },
            children
        );
    }
);

Typography.displayName = 'Typography';

Typography.defaultProps = { element: 'p', className: '', component: 'body1' };

Typography.propTypes = propTypes;

export default Typography;
