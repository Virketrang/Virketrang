import { createElement, forwardRef, memo } from 'react';

import styles from './typography.component.module.sass';
import TypographyComponent from './typography.component.types';

const NAME = 'typography';

import {
    convertFontLetterSpacingToCSSValue,
    convertFontLineHeightToCSSValue,
    CSSVariables,
    ClassAttribute,
} from 'utils/index';
import { convertMarginToCSSValue, convertPaddingToCSSValue } from 'utils/index';

const Typography: TypographyComponent = memo(
    forwardRef(
        (
            {
                element = 'p',
                className = '',
                variant = 'body1',
                children,
                align = 'inherit',
                margin,
                marginTop,
                marginRight,
                marginBottom,
                marginLeft,
                color = 'inherit',
                fluid = true,
                container = false,
                padding,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                style,
                transform = 'none',
                font = 'inherit',
                lineHeight = 'font-lineheight-4',
                letterSpacing = 'font-letterspacing-3',
                ...props
            },
            ref
        ) => {
            const classNames = ClassAttribute(
                className,
                styles.typography,
                styles[variant],
                fluid ? styles.fluid : '',
                container ? styles.container : ''
            );

            const CSSVariablesStyles = CSSVariables(
                {
                    align,
                    transform,
                    font,
                    color,
                    letterSpacing: convertFontLetterSpacingToCSSValue(letterSpacing),
                    lineHeight: convertFontLineHeightToCSSValue(lineHeight),
                    margin: convertMarginToCSSValue(margin, marginTop, marginRight, marginBottom, marginLeft),
                    padding: convertPaddingToCSSValue(padding, paddingTop, paddingRight, paddingBottom, paddingLeft),
                },
                NAME
            );

            return createElement(
                element,
                { ref, className: classNames, style: { ...CSSVariablesStyles, ...style }, ...props },
                children
            );
        }
    )
);

Typography.displayName = NAME;

export default Typography;
