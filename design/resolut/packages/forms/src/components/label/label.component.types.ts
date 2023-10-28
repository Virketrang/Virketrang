import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { FontWeight, HTMLPropsWithoutRefAndChildren } from '../../../../../types';

type Props = { children: string | number; fontWeight?: FontWeight } & HTMLPropsWithoutRefAndChildren<HTMLLabelElement>;

type Ref = RefAttributes<HTMLLabelElement>;

type LabelComponent = ForwardRefExoticComponent<Props & Ref>;

export default LabelComponent;
