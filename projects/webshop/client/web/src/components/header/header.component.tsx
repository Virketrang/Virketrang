import HeaderComponent from './header.component.types';
import styles from './header.component.module.sass';

const Header: HeaderComponent = ({ children }) => {
    return <header className={styles.header}>{children}</header>;
};

export default Header;
