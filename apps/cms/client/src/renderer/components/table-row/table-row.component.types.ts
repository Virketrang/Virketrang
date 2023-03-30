import { FunctionComponent, HTMLProps, ReactNode } from 'react';

type TableRowComponent = FunctionComponent<{ children: ReactNode } & HTMLProps<HTMLTableRowElement>>;

export default TableRowComponent;
