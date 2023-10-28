import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { HTMLPropsWithoutRefAndChildren, Size } from '@/types';

export interface Props extends Omit<HTMLPropsWithoutRefAndChildren<HTMLInputElement>, 'name' | 'size'> {
    preview?: boolean;
    label: string;
    name: string;
    size?: Size;
    shape?: 'square' | 'rounded';
}

export type Ref = RefAttributes<HTMLInputElement>;

type ImageInputFieldComponent = ForwardRefExoticComponent<Props & Ref>;

export default ImageInputFieldComponent;
