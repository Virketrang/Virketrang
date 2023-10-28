import { forwardRef, memo } from 'react';

import 'styles/base.sass';
import 'styles/shape.sass';
import 'styles/size.sass';
import 'styles/stretch.sass';

import { ClassAttribute, convertMarginToCSSValue, CSSVariables } from 'utils/index';

import ButtonComponent from './button.component.types';
import * as styles from './button.component.module.sass';

const Button: ButtonComponent = memo(
    forwardRef(
        (
            {
                className = '',
                children,
                style,
                color = '#ffffff',
                backgroundColor = '#601030',
                fontSize = '1rem',
                icon,
                fontWeight = 400,
                margin,
                marginTop,
                marginRight,
                marginBottom,
                marginLeft,
                grow = true,
                stretch = false,
                shape = 'square',
                size = 'medium',
                disabled = false,
                ...props
            },
            ref
        ) => {
            const classNames = ClassAttribute(
                className,
                styles.button,
                shape,
                size,
                grow ? styles.grow : '',
                disabled ? styles.disabled : '',
                stretch ? 'stretch' : ''
            );

            const CSSVariablesStyles = CSSVariables(
                {
                    margin: convertMarginToCSSValue(margin, marginTop, marginRight, marginBottom, marginLeft),
                    backgroundColor,
                    color,
                    fontSize,
                    fontWeight,
                },
                'button'
            );

            return (
                <button {...props} ref={ref} style={{ ...style, ...CSSVariablesStyles }} className={classNames}>
                    {icon && icon}
                    {children && children}
                </button>
            );
        }
    )
);

Button.displayName = 'Button';

export default Button;
