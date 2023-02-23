'use client';
import LogoComponent from './logo.component.types';
import useStyles from './logo.component.styles';

const Logo: LogoComponent = ({ children }) => {
    const styles = useStyles();

    return (
        <div className={styles.logo}>
            <h1 className={styles.title}>{children}</h1>
            <span className={styles.subtitle}>Handelskompagni</span>
        </div>
    );
};

export default Logo;
