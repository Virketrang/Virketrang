import { ReactElement, ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRef } from '../../types';

import Option from '../option/option.component';

export interface Props extends Omit<HTMLPropsWithoutRef<HTMLSelectElement>, 'children'> {
    multiple?: boolean;
    children: ReactElement<typeof Option>;
    __type?: string;
}

export type Ref = RefAttributes<HTMLSelectElement>;

type SelectComponent = ForwardRefExoticComponent<Props & Ref>;

export default SelectComponent;
