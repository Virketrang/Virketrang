import { ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react';

type Props = Omit<HTMLProps<HTMLDivElement>, 'ref'>;

type Ref = RefAttributes<HTMLDivElement>;

type ButtonGroupComponent = ForwardRefExoticComponent<Props & Ref>;

export default ButtonGroupComponent;
