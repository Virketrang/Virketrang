import { ForwardRefExoticComponent, MemoExoticComponent } from 'react';

type ResolutComponent<T> = MemoExoticComponent<ForwardRefExoticComponent<T>>;

export default ResolutComponent;
