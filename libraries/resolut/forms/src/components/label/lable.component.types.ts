import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { HTMLPropsWithoutRef } from '../../types';

type Props = { children: string } & Omit<HTMLPropsWithoutRef<HTMLLabelElement>, 'children'>;

type Ref = RefAttributes<HTMLLabelElement>;

type LabelComponent = ForwardRefExoticComponent<Props & Ref>;

export default LabelComponent;
