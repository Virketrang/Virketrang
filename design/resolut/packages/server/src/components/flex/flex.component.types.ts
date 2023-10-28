import { ComponentPropsWithoutRef, RefAttributes } from 'react';

import {
    ResolutComponent,
    VerticalAlignment,
    HorizontalAlignment,
    FlexDirection,
    Position,
    Margin,
    Padding,
} from 'types/index';

export interface FlexProps extends ComponentPropsWithoutRef<'div'>, Margin, Padding {
    justifyContent?: HorizontalAlignment;
    alignItems?: VerticalAlignment;
    width?: number | string;
    height?: number | string;
    color?: string;
    background?: string;
    fallback?: string;
    direction?: FlexDirection;
    container?: boolean;
    position?: Position;
}

export type FlexRef = RefAttributes<HTMLDivElement>;

type FlexComponent = ResolutComponent<FlexProps & FlexRef>;

export default FlexComponent;
