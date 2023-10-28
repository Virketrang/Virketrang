import { ComponentPropsWithoutRef, ReactNode, RefAttributes } from 'react';

import { HorizontalAlignment, ResolutComponent, VerticalAlignment, WithAutoComplete, SizeFluid } from 'types/index';
export interface HeaderProps extends ComponentPropsWithoutRef<'header'> {
    height?: string | number;
    backgroundColor?: string;
    verticalAlignment?: VerticalAlignment;
    horizontalAlignment?: HorizontalAlignment;
    inset?: WithAutoComplete<SizeFluid>;
    children: ReactNode;
    gap?: string | number;
}

export type HeaderRef = RefAttributes<HTMLHeadingElement>;

type HeaderComponent = ResolutComponent<HeaderProps & HeaderRef>;

export default HeaderComponent;
