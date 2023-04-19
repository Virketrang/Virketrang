import { LinkProps } from 'react-router-dom';
import { ForwardRefExoticComponent, HTMLProps, ReactNode, RefAttributes } from 'react';

import { Size, ButtonShape, FontWeight } from '../../../../../types';

type CustomProps = {
    children: ReactNode;
    shape?: ButtonShape;
    color?: string;
    backgroundColor?: string;
    grow?: boolean;
    stretch?: boolean;
    fontSize?: string;
    fontWeight?: FontWeight;
    size?: Size;
};

type BaseProps<T> = CustomProps & Omit<HTMLProps<T>, 'ref'>;

type AnchorProps = Omit<LinkProps & CustomProps, 'ref'>;

type ReactButtonProps = BaseProps<HTMLButtonElement> & { to?: never };

export type ButtonProps = AnchorProps | ReactButtonProps;

export type ButtonRef = RefAttributes<HTMLAnchorElement>;

type ButtonComponent = ForwardRefExoticComponent<ButtonProps & ButtonRef>;

export default ButtonComponent;
