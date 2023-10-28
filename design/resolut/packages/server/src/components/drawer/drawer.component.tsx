import { forwardRef, memo } from 'react';

import 'styles/base.sass';

import { CSSVariables, numberToPixels, numberToMs, ClassAttribute } from 'utils/index';

import styles from './drawer.component.module.sass';
import DrawerComponent from './drawer.component.types';

const NAME = 'drawer';

const Drawer: DrawerComponent = memo(
    forwardRef(
        (
            {
                children,
                className = '',
                placement = 'right',
                padding = 0,
                style,
                open,
                width = 480,
                backgroundColor = 'white',
                backdrop = true,
                backdropColor = 'rgba(0, 0, 0, 0.4)',
                transition = {
                    timingFunction: 'ease',
                    duration: 300,
                    delay: 50,
                },
                ...props
            },
            forwardedRef
        ) => {
            const classNames = ClassAttribute(className, styles.drawer, styles[placement]);

            const cssPropertiesStyles = CSSVariables(
                {
                    width: numberToPixels(width),
                    padding: numberToPixels(padding),
                    timingFunction: transition.timingFunction || 'ease',
                    duration: numberToMs(transition.duration || 300),
                    delay: numberToMs(transition.delay || 50),
                    backdropColor,
                    backgroundColor,
                },
                NAME
            );

            return (
                <>
                    <aside
                        style={{ ...style, ...cssPropertiesStyles }}
                        ref={forwardedRef}
                        {...props}
                        className={classNames}
                        data-state-open={open}>
                        {children}
                    </aside>
                    {backdrop && <div data-state-open={open} className={styles.backdrop}></div>}
                </>
            );
        }
    )
);

Drawer.displayName = NAME;

export default Drawer;
