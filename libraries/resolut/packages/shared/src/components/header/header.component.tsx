import { forwardRef, memo } from 'react';

import HeaderComponent from './header.component.types';
import styles from './header.component.module.sass';

const Header: HeaderComponent = memo(
    forwardRef(
        (
            {
                children,
                height = '4rem',
                backgroundColor = '#ffffff',
                inset = '4rem',
                verticalAlignment = 'center',
                horizontalAlignment = 'space-between',
                style,
                className = '',
                ...props
            },
            ref
        ) => {
            const dynamic = {
                '--header-height': typeof height === 'number' ? `${height}px` : height,
                '--header-background-color': backgroundColor,
                '--header-inset': typeof inset === 'number' ? `${inset}px` : inset,
                '--header-vertical-alignment': verticalAlignment,
                '--header-horizontal-alignment': horizontalAlignment,
            };

            const classNames = `${className} ${styles.header}`;

            return (
                <header className={classNames} ref={ref} style={{ ...dynamic, ...style }} {...props}>
                    {children}
                </header>
            );
        }
    )
);

export default Header;
