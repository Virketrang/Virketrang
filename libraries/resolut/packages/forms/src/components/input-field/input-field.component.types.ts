import { RefAttributes, ForwardRefExoticComponent } from 'react';
import { HTMLPropsWithoutRefAndChildren, Size } from '@/types';

export interface Props extends Omit<HTMLPropsWithoutRefAndChildren<HTMLInputElement>, 'size'> {
    name: string;
    label: string;
    size?: Size;
    shape?: 'square' | 'rounded';
}

export type Ref = RefAttributes<HTMLInputElement>;

type InputFieldComponent = ForwardRefExoticComponent<Props & Ref>;

export default InputFieldComponent;
