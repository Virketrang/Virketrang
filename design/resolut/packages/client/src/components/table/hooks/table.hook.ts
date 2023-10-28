type UseTableHook = (
    columns: Resolut.Table.Column[],
    data: any[],
    options?: Resolut.Table.Options
) => {
    head: string[]
    body: { columns: Resolut.Table.Column[]; data: any[]; options?: Resolut.Table.Options }
    pagination: { back: () => void; forward: () => void; index: number }
}

const useTable: UseTableHook = (columns, data, options?) => {
    const [index, setIndex] = useState<number>(options?.pageIndex || 1)

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
