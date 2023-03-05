import { FunctionComponent, ReactNode } from 'react';

type DialogComponent = FunctionComponent<{
    open: boolean;
    children: ReactNode;
    title: string;
    description: string;
    close: () => any;
}>;

export default DialogComponent;
