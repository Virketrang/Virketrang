import useTableRowStyles from './table-row.component.styles';
import TableRowComponent from './table-row.component.types';

const TableRow: TableRowComponent = ({ children, className, ...props }) => {
    const styles = useTableRowStyles();

    return (
        <tr className={`${className} ${styles.row}`} {...props}>
            {children}
        </tr>
    );
};

export default TableRow;
