declare namespace Table {
    interface Props extends React.ComponentProps<'table'> {
        children: React.ReactNode
        pagination?: {
            pageSize?: number
            page?: number
        }
    }

    type Component = React.FunctionComponent<Table.Props>
}

export default Table
