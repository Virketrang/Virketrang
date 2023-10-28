import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren, Size } from '../../../../../types';

export interface InputProps extends Omit<HTMLPropsWithoutRefAndChildren<HTMLInputElement>, 'size'> {
    size?: Size;
    shape?: 'square' | 'rounded';
}

export type InputRef = RefAttributes<HTMLInputElement>;

type InputComponent = ForwardRefExoticComponent<InputProps & InputRef>;

export default InputComponent;
