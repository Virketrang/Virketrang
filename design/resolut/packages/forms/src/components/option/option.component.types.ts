import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren } from '@/types';

export interface Props extends Omit<HTMLPropsWithoutRefAndChildren<HTMLOptionElement>, 'value' | 'label'> {
    value: string | number;
    children: string | number;
}

export type Ref = RefAttributes<HTMLOptionElement>;

type OptionComponent = ForwardRefExoticComponent<Props & Ref>;

export default OptionComponent;
