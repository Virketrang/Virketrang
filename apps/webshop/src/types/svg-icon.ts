import { FunctionComponent, HTMLProps } from 'react';

type SVGIcon = FunctionComponent<
    { size: number; color: string } & Omit<HTMLProps<HTMLOrSVGElement>, 'width' | 'height'>
>;

export default SVGIcon;
