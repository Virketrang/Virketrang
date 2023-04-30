import { ComponentPropsWithoutRef, RefAttributes } from 'react';
import { ResolutComponent, WithAutoComplete } from 'types/index';

type ListStyleType =
    | 'disc'
    | 'circle'
    | 'square'
    | 'decimal'
    | 'georgian'
    | 'trad-chinese-informal'
    | 'kannada'
    | 'none';

export interface ListProps extends ComponentPropsWithoutRef<'ul'> {
    element?: 'ul' | 'ol';
    styleType?: WithAutoComplete<ListStyleType>;
}

export type ListRef = RefAttributes<HTMLUListElement>;

type ListComponent = ResolutComponent<ListProps & ListRef>;

export default ListComponent;
