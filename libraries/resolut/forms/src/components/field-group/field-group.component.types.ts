import { ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react';

export type Props = HTMLProps<HTMLDivElement>;

export type Ref = RefAttributes<HTMLDivElement>;

type FieldGroupComponent = ForwardRefExoticComponent<Props & Ref>;

export default FieldGroupComponent;
