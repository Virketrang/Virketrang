import { createElement, forwardRef } from 'react';
import Link from 'next/link';

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
            ...props
        },
        ref
    ) => {
        const element = props.href ? Link : 'button';

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
