import { createElement, forwardRef } from 'react';

import styles from './button.component.module.sass';
import { Props } from './button.component.types';

const Button = forwardRef<any, Props>(
    (
        {
            children,
            className = '',
            shape = 'normal',
            style,
            color = '#ffffff',
            backgroundColor = '#601030',
            grow = true,
            link,
            external,
            ...props
        },
        ref
    ) => {
        const a: 'a' | typeof link = external ? 'a' : link;
        const element = props.href ? a : 'button';

        const dynamicStyles = { '--button-background-color': backgroundColor, '--button-color': color };

        return createElement(
            element,
            {
                ...(props as any),
                className: `${className} ${styles.button} ${styles[shape]} ${grow && styles.grow}`,
                style: { ...style, ...dynamicStyles },
                ref,
            },
            children
        );
    }
);

export default Button;
