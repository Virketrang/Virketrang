import useTableStyles from './table.component.styles';
import TableComponent from './table.component.types';

const Table: TableComponent = ({ children, className, ...props }) => {
    const styles = useTableStyles();

    return (
        <table className={`${styles.table} ${className}`} {...props}>
            {children}
        </table>
    );
};

export default Table;
