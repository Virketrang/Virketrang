import { ButtonHTMLAttributes, ForwardRefExoticComponent, HTMLProps, ReactNode, RefAttributes } from 'react';

import { Size, ButtonShape, FontWeight } from 'types/index';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    shape?: ButtonShape;
    color?: string;
    backgroundColor?: string;
    grow?: boolean;
    stretch?: boolean;
    fontSize?: string;
    fontWeight?: FontWeight;
    size?: Size;
}

export type ButtonRef = RefAttributes<HTMLButtonElement>;

type ButtonComponent = ForwardRefExoticComponent<ButtonProps & ButtonRef>;

export default ButtonComponent;
