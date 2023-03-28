import { HTMLProps } from 'react';

type HTMLPropsWithoutRef<T> = Omit<HTMLProps<T>, 'ref'>;

export default HTMLPropsWithoutRef;
