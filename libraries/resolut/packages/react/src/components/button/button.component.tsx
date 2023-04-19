import { createElement, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import '../../../../../styles/base.sass';
import '../../../../../styles/button.sass';
import '../../../../../styles/shape.sass';
import '../../../../../styles/size.sass';
import '../../../../../styles/stretch.sass';

import * as styles from './button.component.module.sass';
import ButtonComponent from './button.component.types';

const Button: ButtonComponent = forwardRef(
    (
        {
            children,
            className = '',
            shape = 'square',
            style,
            color = '#ffffff',
            backgroundColor = '#601030',
            fontSize = '1rem',
            fontWeight = 400,
            grow = true,
            stretch = false,
            size = 'medium',
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
                className: `${className} ${styles.button} ${shape} ${size} ${grow && styles.grow} ${
                    stretch && 'stretch'
                }`,
                style: { ...style, ...dynamicStyles },
                ref,
            },
            children
        );
    }
);

export default Button;
