import LogoComponent from './logo.component.types';
import useStyles from './logo.component.styles';

const Logo: LogoComponent = ({ children }) => {
    const styles = useStyles();

    return (
        <div className={styles.logo}>
            <h1 className={styles.title}>{children}</h1>
            <i className={styles.subtitle}>Handelskompagni</i>
        </div>
    );
};

export default Logo;
