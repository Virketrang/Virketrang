import { createElement, forwardRef, memo } from 'react';

import '@styles/base.sass';
import '@styles/button.sass';
import '@styles/shape.sass';
import '@styles/size.sass';
import '@styles/stretch.sass';

import styles from './button.component.module.sass';
import NextButtonComponent from './button.component.types';

const Button: NextButtonComponent = memo(
    forwardRef(
        (
            {
                link,
                external,
                children,
                className = '',
                shape = 'square',
                style,
                color = '#ffffff',
                backgroundColor = '#601030',
                fontSize = '1rem',
                fontWeight = 400,
                onHover = {
                    scale: 1.05,
                    color: '#ffffff',
                    backgroundColor: '#601030',
                    opacity: 100,
                    transition: {
                        property: 'transform',
                        duration: 200,
                        delay: 0,
                        timingFunction: 'ease-in-out',
                    },
                },
                onPress = {
                    scale: 0.95,
                    color: '#ffffff',
                    backgroundColor: '#601030',
                    opacity: 100,
                    transition: {
                        property: 'transform',
                        duration: 200,
                        delay: 0,
                        timingFunction: 'ease-in-out',
                    },
                },
                stretch = false,
                size = 'medium',
                ...props
            },
            ref
        ) => {
            const a: 'a' | typeof link = external ? 'a' : link;
            const element = props.href ? a : 'button';

            const dynamicStyles = {
                '--button-background-color': backgroundColor,
                '--button-color': color,
                '--button-hover-opacity': onHover.opacity,
                '--button-hover-color': onHover.color,
                '--button-hover-background-color': onHover.backgroundColor,
                '--button-hover-scale': `scale(${onHover.scale})`,
                '--button-hover-transition-property': onHover.transition?.property,
                '--button-hover-transition-duration': onHover.transition?.duration,
                '--button-hover-transition-delay': onHover.transition?.delay,
                '--button-hover-transition-timing-function': onHover.transition?.timingFunction,
                '--button-press-opacity': onPress.opacity,
                '--button-press-color': onPress.color,
                '--button-press-background-color': onPress.backgroundColor,
                '--button-press-scale': `scale(${onPress.scale})`,
                '--button-press-transition-property': onPress.transition?.property,
                '--button-press-transition-duration': onPress.transition?.duration,
                '--button-press-transition-delay': onPress.transition?.delay,
                '--button-press-transition-timing-function': onPress.transition?.timingFunction,
            };

            const classNames = `${className} ${styles.button} ${shape} ${size} ${stretch && 'stretch'}`;

            return createElement(
                element,
                {
                    ...(props as any),
                    className: classNames,
                    style: { ...style, ...dynamicStyles },
                    ref,
                },
                children
            );
        }
    )
);

export default Button;
