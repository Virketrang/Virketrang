import useHeaderStyles from './header.component.styles';
import HeaderComponent from './header.component.types';

const Header: HeaderComponent = () => {
    const styles = useHeaderStyles();

    return (
        <header className={styles.header}>
            <h2 className={styles.business}>Liedecke & Noergaard Handelskompagni</h2>
        </header>
    );
};

export default Header;
