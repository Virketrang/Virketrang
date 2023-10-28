import { forwardRef, memo } from 'react';

import 'styles/container.sass';

import FlexComponent from './flex.component.types';
import styles from './flex.component.module.sass';

import { convertMarginToCSSValue, convertPaddingToCSSValue, CSSVariables, ClassAttribute } from 'utils/index';

const Flex: FlexComponent = memo(
    forwardRef(
        (
            {
                className = '',
                style,
                justifyContent = 'center',
                alignItems = 'center',
                direction = 'row',
                width = '100%',
                height = '100%',
                color = 'inherit',
                background = 'inherit',
                fallback = 'inherit',
                position = 'static',
                container = false,
                padding,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                margin,
                marginTop,
                marginRight,
                marginBottom,
                marginLeft,
                ...props
            },
            forwardedRef
        ) => {
            const classNames = ClassAttribute(className, styles.flex);

            const CSSVariablesStyles = CSSVariables(
                {
                    alignItems,
                    justifyContent,
                    width,
                    height,
                    color,
                    background,
                    fallback,
                    direction,
                    position,
                    margin: convertMarginToCSSValue(margin, marginTop, marginRight, marginBottom, marginLeft),
                    padding: convertPaddingToCSSValue(padding, paddingTop, paddingRight, paddingBottom, paddingLeft),
                    container: container ? 'container' : '',
                },
                'flex'
            );

            return (
                <div {...props} className={classNames} style={{ ...style, ...CSSVariablesStyles }} ref={forwardedRef} />
            );
        }
    )
);

export default Flex;
