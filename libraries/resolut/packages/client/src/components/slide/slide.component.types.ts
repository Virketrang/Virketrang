import { ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react';

export interface SlideProps extends HTMLProps<HTMLDivElement> {}

export type SlideRef = RefAttributes<HTMLDivElement>;

type SlideComponent = ForwardRefExoticComponent<SlideProps & SlideRef>;

export default SlideComponent;
