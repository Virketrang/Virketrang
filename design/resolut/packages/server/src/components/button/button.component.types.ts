import { ComponentPropsWithoutRef, ForwardRefExoticComponent, ReactElement, ReactNode, RefAttributes } from 'react';

import { Size, Shape, FontWeight, Margin } from 'types/index';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, Margin {
    children?: string;
    shape?: Shape;
    color?: string;
    backgroundColor?: string;
    grow?: boolean;
    stretch?: boolean;
    fontSize?: string;
    fontWeight?: FontWeight;
    size?: Size;
    icon?: ReactElement;
}

export type ButtonRef = RefAttributes<HTMLButtonElement>;

type ButtonComponent = ForwardRefExoticComponent<ButtonProps & ButtonRef>;

export default ButtonComponent;
