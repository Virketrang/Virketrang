import { ComponentPropsWithoutRef, RefAttributes } from 'react';

import { TimingFunction, Placement, ResolutComponent } from 'types/index';

export interface DrawerProps extends ComponentPropsWithoutRef<'aside'> {
    placement?: Placement;
    backdrop?: boolean;
    backgroundColor?: string;
    backdropColor?: string;
    width?: string | number;
    padding?: string | number;
    open: boolean;
    transition?: {
        timingFunction?: TimingFunction;
        duration?: number;
        delay?: number;
    };
}

export type DrawerRef = RefAttributes<HTMLElement>;

type DrawerComponent = ResolutComponent<DrawerProps & DrawerRef>;

export default DrawerComponent;
