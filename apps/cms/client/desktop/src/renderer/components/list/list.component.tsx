import ListComponent from './list.component.types';
import { Link } from 'react-router-dom';
import useListStyles from './list.component.styles';

const List: ListComponent = ({ title, items }) => {
    const styles = useListStyles();

    return (
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li key={index} className={styles.item}>
                    <Link className={styles.title} to={item.path}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default List;
