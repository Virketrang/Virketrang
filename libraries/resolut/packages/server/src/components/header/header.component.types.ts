import { HTMLPropsWithoutRef } from 'types/index';
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

export interface HeaderProps extends HTMLPropsWithoutRef<HTMLHeadingElement> {
    height?: number | string;
    backgroundColor?: string;
    verticalAlignment?: string;
    horizontalAlignment?: string;
    inset?: string | number;
    children: ReactNode;
}

export type HeaderRef = RefAttributes<HTMLHeadingElement>;

type HeaderComponent = ForwardRefExoticComponent<HeaderProps & HeaderRef>;

export default HeaderComponent;
