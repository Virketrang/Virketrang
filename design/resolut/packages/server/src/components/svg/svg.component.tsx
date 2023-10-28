import { forwardRef, memo } from 'react';

import SVGComponent from './svg.component.types';
import styles from './svg.component.module.sass';
import { ClassAttribute, CSSVariables } from 'utils/index';

const SVG: SVGComponent = memo(
    forwardRef(
        (
            {
                className = '',
                style,
                size = 32,
                width,
                path,
                children,
                height,
                color = '#000000',
                xmlns = 'http://www.w3.org/2000/svg',
                ...props
            },
            forwardedRef
        ) => {
            const classNames = ClassAttribute(className, styles.svg);

            const CSSVariablesStyles = CSSVariables({ color }, 'svg');

            return (
                <svg
                    className={classNames}
                    width={width || size}
                    height={height || size}
                    {...props}
                    style={{ ...style, ...CSSVariablesStyles }}
                    ref={forwardedRef}
                    path={children ? path : ''}>
                    {children ? children : <path d={path} />}
                </svg>
            );
        }
    )
);

export default SVG;
