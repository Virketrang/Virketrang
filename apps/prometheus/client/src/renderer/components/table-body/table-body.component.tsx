import { Link } from 'react-router-dom';
import useTableBodyStyles from './table-body.component.styles';
import TableBodyComponent from './table-body.component.types';

const TableBody: TableBodyComponent = ({ tableData, fields, className, ...props }) => {
    const styles = useTableBodyStyles();

    return (
        <tbody className={`${className}`} {...props}>
            {tableData.map((entry: any) => (
                <tr className={styles.row} key={entry.id}>
                    {fields.map((field, index) => (
                        <td className={styles.td} key={index}>
                            {entry[field]}
                        </td>
                    ))}
                    <td className={styles.td}>
                        <Link className={styles.button} to={`/webshop/products/${entry.id}`}>
                            Rediger
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
