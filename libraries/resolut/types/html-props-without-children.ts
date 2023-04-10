import { HTMLProps } from 'react';

type HTMLPropsWithoutChildren<T> = Omit<HTMLProps<T>, 'children'>;

export default HTMLPropsWithoutChildren;
