import { FunctionComponent, HTMLProps } from 'react';

type TableBodyComponent = FunctionComponent<{ tableData: any; fields: string[] } & HTMLProps<HTMLTableSectionElement>>;

export default TableBodyComponent;
