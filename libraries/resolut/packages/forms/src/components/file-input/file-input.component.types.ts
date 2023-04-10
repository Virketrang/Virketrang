import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren, Size } from '@/types';

export interface Props extends Omit<HTMLPropsWithoutRefAndChildren<HTMLInputElement>, 'size'> {
    size?: Size;
    shape?: 'square' | 'rounded';
    __type?: string;
}

export type Ref = RefAttributes<HTMLInputElement>;

type FileInputComponent = ForwardRefExoticComponent<Props & Ref>;

export default FileInputComponent;
