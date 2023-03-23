import { SetState } from '@interfaces/index';
import { FunctionComponent } from 'react';

type ThirdScreenComponent = FunctionComponent<{ images: File[]; setImages: SetState<File[]>; screen: 1 | 2 | 3 }>;

export default ThirdScreenComponent;
