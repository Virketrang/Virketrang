import { FunctionComponent, HTMLProps, ReactNode } from 'react';

type TableComponent = FunctionComponent<{ children: ReactNode } & HTMLProps<HTMLTableElement>>;

export default TableComponent;
