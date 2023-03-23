import { FunctionComponent } from 'react';

type FieldComponent = FunctionComponent<{ name: string; component: FunctionComponent<any>; [key: string]: any }>;

export default FieldComponent;
