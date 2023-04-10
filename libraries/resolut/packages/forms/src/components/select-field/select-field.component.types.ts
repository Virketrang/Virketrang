import { ReactElement, ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren } from '@/types';

import Option from '../option/option.component';

export interface Props extends Omit<HTMLPropsWithoutRefAndChildren<HTMLSelectElement>, 'label' | 'size'> {
    label: string;
    value?: string;
    onChange?: () => void;
    multiple?: boolean;
    children: ReactElement<typeof Option> | Array<ReactElement<typeof Option>>;
}

export type Ref = RefAttributes<HTMLSelectElement>;

type SelectFieldComponent = ForwardRefExoticComponent<Props & Ref>;

export default SelectFieldComponent;
