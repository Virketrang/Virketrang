import { Column, TableOptions } from '@/nexus/common/hooks/table'

interface TableBodyProps extends React.ComponentProps<'tbody'> {
    body: { columns: Column[]; data: any; options?: TableOptions }
}

type TableBodyComponent = React.FunctionComponent<TableBodyProps>

export default TableBodyComponent
