import { ComponentPropsWithoutRef, RefAttributes } from 'react';
import { ResolutComponent } from 'types/index';

export interface SVGProps extends ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
    color?: string;
}

export type SVGRef = RefAttributes<SVGSVGElement>;

type SVGComponent = ResolutComponent<SVGProps & SVGRef>;

export default SVGComponent;
