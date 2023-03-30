import { ReactElement, ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRef } from '../../types';

import Option from '../option/option.component';

export interface Props extends Omit<HTMLPropsWithoutRef<HTMLSelectElement>, 'children'> {
    label: string;
    value?: string;
    onChange?: () => void;
    multiple?: boolean;
    children: ReactElement<typeof Option> | ReactElement<typeof Option>[];
}

export type Ref = RefAttributes<HTMLSelectElement>;

type SelectFieldComponent = ForwardRefExoticComponent<Props & Ref>;

export default SelectFieldComponent;
