import { HTMLProps } from 'react';

export type Props = { name: string; label: string } & HTMLProps<HTMLTextAreaElement>;

export type Ref = HTMLTextAreaElement;
