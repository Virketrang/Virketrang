import { forwardRef } from 'react';
import clsx from 'clsx';

import 'styles/base.sass';
import 'styles/shape.sass';
import 'styles/size.sass';
import 'styles/stretch.sass';

import ButtonComponent from './button.component.types';
import { base } from './button.component.css';
import * as styles from './button.component.module.sass';

const Button: ButtonComponent = forwardRef(
    (
        {
            className = '',
            style,
            color = '#ffffff',
            backgroundColor = '#601030',
            fontSize = '1rem',
            fontWeight = 400,
            grow = true,
            stretch = false,
            shape = 'square',
            size = 'medium',
            ...props
        },
        ref
    ) => {
        const classNames = clsx(base, className, styles.button, shape, size, grow && styles.grow, { stretch });

        return <button {...props} ref={ref} style={{ ...style }} className={classNames} />;
    }
);

// const dynamicStyles = {
//     '--button-background-color': backgroundColor,
//     '--button-color': color,
//     '--button-font-size': fontSize,
//     '--button-font-weight': fontWeight,
// };

export default Button;
