// import { Pagination } from '@resolut/client'

import { Dots } from '@/nexus/client/assets'
import { categoriesArrayToString, useTable } from '@/nexus/client/common'
import { Table } from '@/nexus/client/components'

import styles from './division-table.component.module.css'
import DivisionTableComponent from './division-table.component.types'
import { columns } from './division-table.component.data'

const PAGE_SIZE = 10

const DivisionTable: DivisionTableComponent = memo(({ data }) => {
    const tableData = useMemo(
        () =>
            data.map((entry) => ({
                id: entry.id,
                name: entry.name['da-DK'],
                categories: categoriesArrayToString(entry.categories),
                tools: (
                    <button>
                        <Dots />
                    </button>
                )
            })),
        []
    )

    const table = useTable(columns, tableData, { pageSize: PAGE_SIZE, pageIndex: 1 })

    return (
        <>
            <Table className={styles.table} pagination={{ pageSize: PAGE_SIZE }}>
                <Table.Head head={table.head} />
                <Table.Body body={table.body} />
            </Table>
            {/* <Pagination
                back={table.pagination.back}
                forward={table.pagination.forward}
                index={table.pagination.index}
                pages={Math.ceil(tableData.length / PAGE_SIZE)}
            /> */}
        </>
    )
})

export default DivisionTable
