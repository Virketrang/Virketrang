import LogoComponent from './logo.component.types';
import styles from './logo.component.module.sass';

const Logo: LogoComponent = ({ children }) => {
    return <h1 className={styles.logo}>{children}</h1>;
};

export default Logo;
