import { createElement, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './button.component.module.sass';
import propTypes from './button.component.proptypes';
import { ButtonRef, Props } from './button.component.types';

const Button = forwardRef<ButtonRef, Props>(
    (
        {
            children,
            className = '',
            shape = 'normal',
            style,
            color = '#ffffff',
            backgroundColor = '#601030',
            fontSize = '1rem',
            fontWeight = 400,
            grow = true,
            stretch = false,
            ...props
        },
        ref
    ) => {
        const element = props.to ? Link : 'button';

        const dynamicStyles = {
            '--button-background-color': backgroundColor,
            '--button-color': color,
            '--button-font-size': fontSize,
            '--button-font-weight': fontWeight,
        };

        return createElement(
            element,
            {
                ...(props as any),
                className: `${className} ${styles.button} ${styles[shape]} ${grow && styles.grow} ${
                    stretch && styles.stretch
                }`,
                style: { ...style, ...dynamicStyles },
                ref,
            },
            children
        );
    }
);

Button.propTypes = propTypes;

export default Button;
