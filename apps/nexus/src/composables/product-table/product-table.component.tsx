import { Table } from '@/nexus/components'
import { Dots } from '@/nexus/assets'
import { useTable } from '@/nexus/common'

import ProductTableComponent from './product-table.component.types'
import styles from './product-table.component.module.css'

const columns = [
    { name: '', accessor: 'image' },
    { name: 'Navn', accessor: 'name' },
    { name: 'Kostpris', accessor: 'costPrice' },
    { name: 'Salgspris', accessor: 'retailPrice' },
    { name: 'Lagerbeholdning', accessor: 'stock' },
    { name: 'Designer', accessor: 'designer' },
    { name: '', accessor: 'tools' }
]

const ProductTable: ProductTableComponent = memo(({ data }) => {
    const tableData = data.map(({ id, name, costPrice, retailPrice, stock, designer, images }) => ({
        id,
        image: <img src={images[0].url} alt="Demo image" className={styles.image} />,
        name: name['da-DK'],
        costPrice,
        retailPrice,
        stock,
        designer,
        tools: (
            <button>
                <Dots />
            </button>
        )
    }))

    const table = useTable(columns, tableData, {})

    return (
        <Table className={styles.table}>
            <Table.Head head={table.head} />
            <Table.Body body={table.body} />
        </Table>
    )
})

export default ProductTable
