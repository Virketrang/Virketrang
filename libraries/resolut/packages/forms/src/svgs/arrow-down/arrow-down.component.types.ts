import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Props extends Omit<SVGProps<SVGSVGElement>, 'ref' | 'children' | 'height' | 'width'> {
    size?: number;
}

export type Ref = RefAttributes<SVGSVGElement>;

type ArrowDownComponent = ForwardRefExoticComponent<Props & Ref>;

export default ArrowDownComponent;
