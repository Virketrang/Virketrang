import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren, Size } from '@/types';

type InputProps = {
    size?: Size;
    shape?: 'square' | 'rounded';
} & HTMLPropsWithoutRefAndChildren<HTMLInputElement>;

type InputRef = RefAttributes<HTMLInputElement>;

type InputComponent = ForwardRefExoticComponent<InputProps & InputRef>;

export default InputComponent;
