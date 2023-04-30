import { ComponentPropsWithoutRef, RefAttributes } from 'react';

import TypographyElement from './types/element';
import TypographyVariant from './types/variant';

import {
    LetterSpacing,
    LineHeight,
    Margin,
    Padding,
    TextAlign,
    TextTransform,
    WithAutoComplete,
    ResolutComponent,
} from 'types/index';

export type TypographyProps = (
    | ComponentPropsWithoutRef<'h1'>
    | ComponentPropsWithoutRef<'h2'>
    | ComponentPropsWithoutRef<'h3'>
    | ComponentPropsWithoutRef<'h4'>
    | ComponentPropsWithoutRef<'h5'>
    | ComponentPropsWithoutRef<'h6'>
    | ComponentPropsWithoutRef<'p'>
    | ComponentPropsWithoutRef<'span'>
) &
    (Margin & Padding) & {
        element?: TypographyElement;
        variant?: TypographyVariant;
        align?: TextAlign;
        transform?: TextTransform;
        letterSpacing?: WithAutoComplete<LetterSpacing>;
        lineHeight?: WithAutoComplete<LineHeight>;
        font?: string;
        color?: string;
        fluid?: boolean;
        container?: boolean;
    };

export type Ref = RefAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>;

type TypographyComponent = ResolutComponent<TypographyProps & Ref>;

export default TypographyComponent;
