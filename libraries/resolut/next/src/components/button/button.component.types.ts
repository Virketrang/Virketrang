import Link, { LinkProps } from 'next/link';
import { HTMLProps, ReactNode } from 'react';

type ButtonShape = 'round' | 'normal';

type CustomProps = {
    children: ReactNode;
    shape?: ButtonShape;
    color?: string;
    backgroundColor?: string;
    grow?: boolean;
};

type BaseProps<T> = CustomProps & HTMLProps<T>;

type AnchorOnlyProps =
    | { link: never; href: string; external?: true }
    | { link: typeof Link; href: string; external?: false };

type AnchorProps = LinkProps & AnchorOnlyProps & BaseProps<HTMLAnchorElement>;

type ButtonProps = { link: never; href: never; external: never } & BaseProps<HTMLButtonElement>;

export type Props = AnchorProps | ButtonProps;

export type ButtonRef = any;
