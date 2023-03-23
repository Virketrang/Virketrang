import useNavigationStyles from './navigation.component.styles';
import NavigationComponent from './navigation.component.types';

const Navigation: NavigationComponent = () => {
    const styles = useNavigationStyles();

    const items = [
        { path: '/orders', name: 'Ordrer' },
        { path: '/webshop', name: 'Webshop' },
        { path: '/accounting', name: 'Regnskab' },
        { path: '/customers', name: 'Kundekartotek' },
        { path: '/employees', name: 'Medarbejdere' },
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
