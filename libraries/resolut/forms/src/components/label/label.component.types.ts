import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { HTMLPropsWithoutRefAndChildren } from '../../types';

type Props = { children: string } & HTMLPropsWithoutRefAndChildren<HTMLLabelElement>;

type Ref = RefAttributes<HTMLLabelElement>;

type LabelComponent = ForwardRefExoticComponent<Props & Ref>;

export default LabelComponent;
