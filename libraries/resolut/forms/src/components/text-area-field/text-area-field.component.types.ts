import { RefAttributes, ForwardRefExoticComponent } from 'react';
import { HTMLPropsWithoutRefAndChildren } from '../../types';

export interface Props extends Omit<HTMLPropsWithoutRefAndChildren<HTMLTextAreaElement>, 'pattern'> {
    name: string;
    pattern?: string;
}

export type Ref = RefAttributes<HTMLTextAreaElement>;

type TextAreaFieldComponent = ForwardRefExoticComponent<Props & Ref>;

export default TextAreaFieldComponent;
