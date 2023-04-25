import { HTMLProps, ReactNode } from 'react';

type Props = { children: ReactNode } & HTMLProps<HTMLTableElement>;

type TableComponent = { (args: Props): JSX.Element; Head(): JSX.Element; Body(): JSX.Element };

export default TableComponent;
