'use client';
import { MouseEvent, memo, useRef, createRef, forwardRef, useCallback, Children, useMemo } from 'react';

import CarouselFrameComponent from './frame.component.types';
import styles from './frame.component.module.sass';
import { CarouselArrows, CarouselControls } from './components';

import { NotARefObjectError, NoElementReferencedError } from '../../../../errors';

const CarouselFrame: CarouselFrameComponent = memo(
    forwardRef(
        (
            { className = '', style, children, onMouseDown, onMouseLeave, onMouseMove, onMouseUp, ...props },
            forwardedRef
        ) => {
            if (typeof forwardedRef === 'function') throw new NotARefObjectError();

            const carousel = forwardedRef || createRef<HTMLDivElement>();
            const dragging = useRef(false);
            const startX = useRef<number>();
            const scrollLeft = useRef<number>();

            const childCount = useMemo(() => Children.count(children), [children]);

            const classNames = `${styles.frame} ${className}`;

            const dynamicStyles = { '--slides': childCount };

            const mouseDown = useCallback(
                (event: MouseEvent<HTMLDivElement>) => {
                    onMouseDown && onMouseDown(event);
                    if (!carousel.current) throw new NoElementReferencedError();

                    carousel.current.style.scrollSnapType = 'none';
                    dragging.current = true;

                    startX.current = event.pageX - carousel.current.offsetLeft;
                    scrollLeft.current = carousel.current.scrollLeft || 0;
                },
                [onMouseDown]
            );

            const mouseMove = useCallback(
                (event: MouseEvent<HTMLDivElement>) => {
                    onMouseMove && onMouseMove(event);
                    if (!dragging.current) return;
                    if (!carousel.current) throw new NoElementReferencedError();
                    if (!startX.current) throw Error('No starting x-value exists');
                    if (!scrollLeft.current && scrollLeft.current !== 0) throw Error('No scrollLeft value exists');

                    event.preventDefault();

                    const xPositionWithinCarousel = event.pageX - carousel.current.offsetLeft;
                    const distancedDragged = xPositionWithinCarousel - startX.current;
                    carousel.current.scrollTo({ left: scrollLeft.current - distancedDragged });
                },
                [onMouseMove]
            );

            const mouseUpOrLeave = useCallback((event: MouseEvent<HTMLDivElement>) => {
                if (!carousel.current) throw new NoElementReferencedError();

                carousel.current.style.scrollSnapType = 'x mandatory';

                dragging.current = false;
            }, []);

            return (
                <div
                    className={classNames}
                    style={{ ...style, ...dynamicStyles }}
                    {...props}
                    ref={carousel}
                    onMouseDown={mouseDown}
                    onMouseUp={event => {
                        onMouseUp && onMouseUp(event);
                        mouseUpOrLeave(event);
                    }}
                    onMouseLeave={event => {
                        onMouseLeave && onMouseLeave(event);
                        mouseUpOrLeave(event);
                    }}
                    onMouseMove={mouseMove}>
                    {children}
                </div>
            );
        }
    )
);

export default CarouselFrame;
