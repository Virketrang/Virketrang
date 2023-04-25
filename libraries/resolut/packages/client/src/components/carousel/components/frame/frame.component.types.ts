import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface CarouselFrameProps extends ComponentPropsWithoutRef<'div'> {}

export type CarouselFrameRef = RefAttributes<HTMLDivElement>;

type CarouselFrameComponent = ForwardRefExoticComponent<CarouselFrameProps & CarouselFrameRef>;

export default CarouselFrameComponent;
