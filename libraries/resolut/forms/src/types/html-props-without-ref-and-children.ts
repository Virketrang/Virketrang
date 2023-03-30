import { HTMLProps } from 'react';

type HTMLPropsWithoutRefAndChildren<T> = Omit<HTMLProps<T>, 'ref' | 'children'>;

export default HTMLPropsWithoutRefAndChildren;
