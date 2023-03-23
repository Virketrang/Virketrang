import LogoComponent from './logo.component.types';
import styles from './logo.component.module.sass';

const Logo: LogoComponent = ({ children }) => {
    return (
        <div className={`${styles.logo}`}>
            <h1 className={styles.title}>{children}</h1>
            <span className={styles.subtitle}>Handelskompagni</span>
        </div>
    );
};

export default Logo;
