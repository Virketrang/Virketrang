import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRef } from '../../../../../types';

export interface Props extends HTMLPropsWithoutRef<HTMLDivElement> {
    direction?: 'column' | 'row';
}

export type Ref = RefAttributes<HTMLDivElement>;

type FormControlComponent = ForwardRefExoticComponent<Props & Ref>;

export default FormControlComponent;
