import { LinkProps } from 'next/link';
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

type AnchorProps = LinkProps & BaseProps<HTMLAnchorElement>;

type ButtonProps = BaseProps<HTMLButtonElement>;

export type Props = AnchorProps | ButtonProps;

export type ButtonRef = any;
