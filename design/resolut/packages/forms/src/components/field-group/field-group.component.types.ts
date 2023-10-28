import { ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react';

import { HTMLPropsWithoutRef } from '../../../../../types';

export type Props = { gap?: string; direction?: 'horizontal' | 'vertical' } & HTMLPropsWithoutRef<HTMLDivElement>;

export type Ref = RefAttributes<HTMLDivElement>;

type FieldGroupComponent = ForwardRefExoticComponent<Props & Ref>;

export default FieldGroupComponent;
