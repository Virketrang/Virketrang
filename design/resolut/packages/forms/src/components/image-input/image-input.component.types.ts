import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren, Size } from '@/types';

export type Props = {
    __type?: string;
    size?: Size;
    shape?: 'square' | 'rounded';
    __is_file_input?: boolean;
} & HTMLPropsWithoutRefAndChildren<HTMLInputElement>;

export type Ref = RefAttributes<HTMLInputElement>;

type ImageInputComponent = ForwardRefExoticComponent<Props & Ref>;

export default ImageInputComponent;
