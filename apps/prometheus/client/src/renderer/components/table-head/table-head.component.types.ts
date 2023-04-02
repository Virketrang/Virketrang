import { FunctionComponent, HTMLProps } from 'react';

type TableHeadComponent = FunctionComponent<{ fieldNames: string[] } & HTMLProps<HTMLTableSectionElement>>;

export default TableHeadComponent;
