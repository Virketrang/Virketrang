import { ComponentProps, FunctionComponent } from 'react'

declare namespace Table {
    interface Props extends ComponentProps<'table'> {
        children: React.ReactNode
        pagination?: {
            pageSize?: number
            page?: number
        }
    }

    type Component = FunctionComponent<Table.Props>
}

export default Table
