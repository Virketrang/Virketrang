import { TableOptions } from './../../../../common/hooks/table'
import { Column } from '@/common/hooks/table'
import { ComponentProps, FunctionComponent } from 'react'

interface TableBodyProps extends ComponentProps<'tbody'> {
    body: { columns: Column[]; data: any; options?: TableOptions }
}

type TableBodyComponent = FunctionComponent<TableBodyProps>

export default TableBodyComponent
