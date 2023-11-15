import TableHeadComponent from './head.component.types'

const TableHead: TableHeadComponent = memo(({ head, ...props }) => {
    return (
        <thead {...props}>
            <tr>{head && head.map((entry) => <th key={crypto.randomUUID()}>{entry}</th>)}</tr>
        </thead>
    )
})

export default TableHead
