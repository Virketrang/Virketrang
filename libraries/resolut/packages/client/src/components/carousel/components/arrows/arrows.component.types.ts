import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface CarouselArrowsProps extends ComponentPropsWithoutRef<'div'> {}

export type CarouselArrowsRef = RefAttributes<HTMLDivElement>;

type CarouselArrowsComponent = ForwardRefExoticComponent<CarouselArrowsProps & CarouselArrowsRef>;

export default CarouselArrowsComponent;
