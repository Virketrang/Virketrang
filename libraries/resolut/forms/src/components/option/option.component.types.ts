import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRef } from '../../types';

export interface Props extends Omit<HTMLPropsWithoutRef<HTMLOptionElement>, 'children'> {
    children: string;
}

export type Ref = RefAttributes<HTMLOptionElement>;

type OptionComponent = ForwardRefExoticComponent<Props & Ref>;

export default OptionComponent;
