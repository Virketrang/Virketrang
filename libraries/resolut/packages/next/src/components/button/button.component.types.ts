import Link, { LinkProps } from 'next/link';
import { ForwardRefExoticComponent, HTMLProps, ReactNode, RefAttributes } from 'react';

import { Transition } from '@/interfaces';
import { Size, ButtonShape, FontWeight } from '@/types';

interface OnHover {
    color?: string;
    backgroundColor?: string;
    scale?: number;
    opacity?: number;
    transition?: Transition;
}

interface OnPress {
    color?: string;
    backgroundColor?: string;
    scale?: number;
    opacity?: number;
    transition?: Transition;
}

type CustomProps = {
    children: ReactNode;
    shape?: ButtonShape;
    color?: string;
    backgroundColor?: string;
    onHover?: OnHover;
    onPress?: OnPress;
    stretch?: boolean;
    fontSize?: string;
    fontWeight?: FontWeight;
    size?: Size;
};

type BaseProps<T> = CustomProps & HTMLProps<T>;

type AnchorOnlyProps =
    | { link: never; href: string; external?: true }
    | { link: typeof Link; href: string; external?: false };

type AnchorProps = Omit<LinkProps, 'external'> & AnchorOnlyProps & BaseProps<HTMLAnchorElement>;

type ButtonProps = { link: never; href: never; external?: never } & BaseProps<HTMLButtonElement>;

export type NextButtonProps = AnchorProps | ButtonProps;

export type NextButtonRef = RefAttributes<HTMLButtonElement> | RefAttributes<HTMLAnchorElement>;

type NextButtonComponent = ForwardRefExoticComponent<NextButtonProps & NextButtonRef>;

export default NextButtonComponent;
