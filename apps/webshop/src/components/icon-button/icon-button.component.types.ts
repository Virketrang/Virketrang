import { SVGIcon } from '@types';
import { FunctionComponent } from 'react';

type IconButtonComponent = FunctionComponent<{ icon: SVGIcon; size: number; color: string; onClick: () => void }>;

export default IconButtonComponent;
