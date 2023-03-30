import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { HTMLPropsWithoutRefAndChildren } from '../../types';

export type Props = { name: string; __type?: string } & HTMLPropsWithoutRefAndChildren<HTMLTextAreaElement>;

export type Ref = RefAttributes<HTMLTextAreaElement>;

type TextAreaComponent = ForwardRefExoticComponent<Props & Ref>;

export default TextAreaComponent;
