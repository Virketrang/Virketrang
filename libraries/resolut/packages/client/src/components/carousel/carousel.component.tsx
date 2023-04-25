'use client';
import { MouseEvent, memo, useRef, createRef, forwardRef, useCallback, Children, useMemo } from 'react';

import CarouselComponent from './carousel.component.types';
import styles from './carousel.component.module.sass';
import { CarouselRoot, CarouselFrame, CarouselArrows, CarouselControls } from './components';

import { NotARefObjectError, NoElementReferencedError } from '../../errors';

const Carousel: CarouselComponent = memo(
    forwardRef(({ children, ...props }, forwardedRef) => {
        return (
            <CarouselRoot>
                <CarouselFrame {...props} ref={forwardedRef}>
                    {children}
                </CarouselFrame>
            </CarouselRoot>
        );
    })
);

Carousel.Root = CarouselRoot;

export default Carousel;
