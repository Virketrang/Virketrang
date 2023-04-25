import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface CarouselRootProps extends ComponentPropsWithoutRef<'div'> {}

export type CarouselRootRef = RefAttributes<HTMLDivElement>;

type CarouselRootComponent = ForwardRefExoticComponent<CarouselRootProps & CarouselRootRef>;

export default CarouselRootComponent;
