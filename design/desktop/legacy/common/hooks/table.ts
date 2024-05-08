export interface Column {
    name: string
    accessor: string
}

export interface TableOptions {
    pageSize?: number
    pageIndex?: number
}

const useTable = (columns: Column[], data: any[], options?: TableOptions) => {
    const [index, setIndex] = useState(options?.pageIndex || 1)

    const numberOfPages = data.length / (options?.pageSize || 10)

    const forward = () => {
        if (index < numberOfPages) setIndex((previousIndex) => previousIndex + 1)
    }

    const back = () => {
        if (index > 1) setIndex((previousIndex) => previousIndex - 1)
    }

    return {
        head: columns.map((column) => column.name),
        body: { columns, data, options: { pageSize: options?.pageSize, pageIndex: index } },
        pagination: { back, forward, index }
    }
}

export default useTable
