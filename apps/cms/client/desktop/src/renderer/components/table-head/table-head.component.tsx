import useTableHeadStyles from './table-head.component.styles';
import TableHeadComponent from './table-head.component.types';

const TableHead: TableHeadComponent = ({ fieldNames, className, ...props }) => {
    const styles = useTableHeadStyles();

    return (
        <thead className={`${styles.tableHead} ${className}`} {...props}>
            <tr className={styles.tableRow}>
                {fieldNames.map((fieldName, index) => (
                    <th key={index} className={styles.tableTitle}>
                        {fieldName}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
