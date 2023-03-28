import { HTMLProps, ReactNode } from 'react';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyComponent =
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2';

export type Props = {
    element?: TypographyElement;
    component?: TypographyComponent;
    children: ReactNode;
} & HTMLProps<HTMLHeadingElement>;

export type Ref = HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement;
