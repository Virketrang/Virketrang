import { HTMLProps, ReactNode } from 'react';

export type Props = { children: ReactNode; onSubmit?: Function; preventDefault?: boolean } & Omit<
    HTMLProps<HTMLFormElement>,
    'onSubmit'
>;

export type Ref = HTMLFormElement;
