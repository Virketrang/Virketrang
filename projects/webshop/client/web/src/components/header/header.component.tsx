import HeaderComponent from './header.component.types';
import useStyles from './header.component.styles';

const Header: HeaderComponent = ({ children }) => {
    const styles = useStyles();

    return <header className={styles.header}>{children}</header>;
};

export default Header;
