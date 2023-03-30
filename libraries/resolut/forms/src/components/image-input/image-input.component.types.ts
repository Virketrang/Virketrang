import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { HTMLPropsWithoutRefAndChildren } from '../../types';

export type Props = { __type?: string } & HTMLPropsWithoutRefAndChildren<HTMLInputElement>;

export type Ref = RefAttributes<HTMLInputElement>;

type ImageInputComponent = ForwardRefExoticComponent<Props & Ref>;

export default ImageInputComponent;
