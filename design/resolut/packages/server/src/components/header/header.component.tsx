import { forwardRef, memo } from 'react';

import 'styles/base.sass';

import { ClassAttribute, CSSVariables, numberToPixels, convertFluidSizeToCSSValue } from 'utils/index';

import HeaderComponent from './header.component.types';
import styles from './header.component.module.sass';

const NAME = 'header';

const Header: HeaderComponent = memo(
    forwardRef(
        (
            {
                children,
                height = '4rem',
                backgroundColor = '#ffffff',
                inset = 'size-fluid-2',
                gap = '0',
                verticalAlignment = 'center',
                horizontalAlignment = 'space-between',
                style,
                className = '',
                ...props
            },
            ref
        ) => {
            const CSSVariablesStyles = CSSVariables(
                {
                    gap,
                    height: numberToPixels(height),
                    inset: convertFluidSizeToCSSValue(inset),
                    backgroundColor,
                    verticalAlignment,
                    horizontalAlignment,
                },
                NAME
            );

            const classNames = ClassAttribute(styles.header, className);

            return (
                <header className={classNames} ref={ref} style={{ ...CSSVariablesStyles, ...style }} {...props}>
                    {children}
                </header>
            );
        }
    )
);

Header.displayName = NAME;

export default Header;
