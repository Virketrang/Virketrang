import TableTypes from './table.component.types'
import { TableHead, TableBody, TableHeadComponent, TableBodyComponent } from './components'

const TableContext = createContext({})

const Component: TableTypes.Component = memo(({ pagination, ...props }) => {
    return (
        <TableContext.Provider value={{}}>
            <table {...props} />
        </TableContext.Provider>
    )
})

const Table: TableTypes.Component & {
    Head: TableHeadComponent
    Body: TableBodyComponent
} = Object.assign(Component, {
    Head: TableHead,
    Body: TableBody
})

export default Table
