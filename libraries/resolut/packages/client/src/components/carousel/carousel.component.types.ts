import { ComponentPropsWithoutRef, ForwardRefExoticComponent, MemoExoticComponent, RefAttributes } from 'react';

export interface CarouselProps extends ComponentPropsWithoutRef<'div'> {}

export type CarouselRef = RefAttributes<HTMLDivElement>;

type CarouselComponent = MemoExoticComponent<ForwardRefExoticComponent<CarouselProps & CarouselRef>>;

export default CarouselComponent;
