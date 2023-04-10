import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { HTMLPropsWithoutRef } from '@/types';

export interface Props extends Omit<HTMLPropsWithoutRef<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: Function;
    preventDefault?: boolean;
}

export type Ref = RefAttributes<HTMLFormElement>;

type FormComponent = ForwardRefExoticComponent<Props & Ref>;

export default FormComponent;
