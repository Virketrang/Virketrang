import { ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react';

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TextAlign = 'center' | 'inherit' | 'justify' | 'left' | 'right';

type Component =
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption';

export interface Props extends Omit<HTMLProps<HTMLHeadingElement>, 'ref'> {
    element?: Element;
    component?: Component;
    align?: TextAlign;
}

export type Ref = RefAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>;

type TypographyComponent = ForwardRefExoticComponent<Props & Ref>;

export default TypographyComponent;
