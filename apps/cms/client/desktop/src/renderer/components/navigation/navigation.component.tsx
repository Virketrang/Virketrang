import useNavigationStyles from './navigation.component.styles';
import NavigationComponent from './navigation.component.types';

const Navigation: NavigationComponent = () => {
    const styles = useNavigationStyles();

    const items = [
        { path: '/dashboard/orders', name: 'Ordrer' },
        { path: '/dashboard/webshop', name: 'Webshop' },
        { path: '/dashboard/accounting', name: 'Regnskab' },
        { path: '/dashboard/customers', name: 'Kundekartotek' },
        { path: '/dashboard/employees', name: 'Medarbejdere' },
    ];

    return (
        <nav className={styles.navigation}>
            {items.map((item, index) => (
                <a key={index} href={item.path} className={styles.anchor}>
                    {item.name}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;
