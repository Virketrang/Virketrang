import { LinkProps } from 'react-router-dom';
import { HTMLProps, ReactNode } from 'react';

type ButtonShape = 'round' | 'normal' | 'rounded';

type CustomProps = {
    children: ReactNode;
    shape?: ButtonShape;
    color?: string;
    backgroundColor?: string;
    grow?: boolean;
    stretch?: boolean;
    fontSize?: string;
    fontWeight?: number;
};

type BaseProps<T> = CustomProps & HTMLProps<T>;

type AnchorProps = LinkProps & CustomProps;

type ButtonProps = BaseProps<HTMLButtonElement> & { to?: undefined };

export type Props = AnchorProps | ButtonProps;

export type ButtonRef = HTMLButtonElement | HTMLAnchorElement;
