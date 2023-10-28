import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren } from '@/types';

export interface Props extends HTMLPropsWithoutRefAndChildren<HTMLDivElement> {
    fieldName: string;
}

export type Ref = RefAttributes<HTMLDivElement>;

type ImagePreviewComponent = ForwardRefExoticComponent<Props & Ref>;

export default ImagePreviewComponent;
