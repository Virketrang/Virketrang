import { ComponentPropsWithoutRef, ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react';

export interface CarouselControlsProps extends ComponentPropsWithoutRef<'div'> {}

export type CarouselControlsRef = RefAttributes<HTMLDivElement>;

type CarouselControlsComponent = ForwardRefExoticComponent<CarouselControlsProps & CarouselControlsRef>;

export default CarouselControlsComponent;
