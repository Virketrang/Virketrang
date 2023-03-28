import useSWR from 'swr';

import { Table, TableBody, TableHead } from '@components';

import CategoryTableComponent from './category-table.component.types';
import useCategoryTableStyles from './category-table.component.styles';

const CategoryTable: CategoryTableComponent = () => {
    const styles = useCategoryTableStyles();
    const { data } = useSWR('http://localhost:8080/categories');

    return (
        <Table className={styles.table}>
            <TableHead fieldNames={['Navn', '']} />
            <TableBody tableData={data.body} fields={['name']} />
        </Table>
    );
};

export default CategoryTable;
