import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface CarouselProps extends ComponentPropsWithoutRef<'div'> {}

export type CarouselRef = RefAttributes<HTMLDivElement>;

type CarouselComponent = ForwardRefExoticComponent<CarouselProps & CarouselRef>;

export default CarouselComponent;
