import useSWR from 'swr';

import ProductTableComponent from './product-table.component.types';

import { Table, TableHead, TableBody, Spinner } from '@components/index';
import useProductTableStyles from './product-table.component.styles';

const ProductTable: ProductTableComponent = () => {
    const styles = useProductTableStyles();
    const { data } = useSWR('http://localhost:8080/products');

    return (
        <Table className={styles.table}>
            <TableHead fieldNames={['Navn', 'Salgspris', 'Kostpris', 'Lager', '']} />
            <TableBody tableData={data.body} fields={['name', 'retailPrice', 'costPrice', 'stock']} />
        </Table>
    );
};

export default ProductTable;
