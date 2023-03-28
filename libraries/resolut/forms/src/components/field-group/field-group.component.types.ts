import { HTMLProps, ReactNode } from 'react';

export type Props = { children: ReactNode } & HTMLProps<HTMLDivElement>;

export type Ref = HTMLDivElement;
