import { FunctionComponent, HTMLProps } from 'react';

type IconComponent = FunctionComponent<
    { width: number; height: number; path: string; color: string } & HTMLProps<HTMLOrSVGElement>
>;

export default IconComponent;
