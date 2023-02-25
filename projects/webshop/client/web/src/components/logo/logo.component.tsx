import LogoComponent from './logo.component.types';
import styles from './logo.component.module.sass';
import { Aboreto, Roboto_Slab, Playfair_Display, EB_Garamond } from '@next/font/google';

const aboreto = Aboreto({
    subsets: ['latin'],
    weight: '400',
});

const roboto_slab = Roboto_Slab({
    subsets: ['latin'],
    weight: '300',
});

//UNDERTITEL
const playfair_display = Playfair_Display({
    subsets: ['latin'],
    weight: '400',
});

const eb_garamond = EB_Garamond({
    subsets: ['latin'],
    weight: '500',
});

const Logo: LogoComponent = ({ children }) => {
    return (
        <div className={`${styles.logo} ${eb_garamond.className}`}>
            <h1 className={styles.title}>{children}</h1>
            <span className={styles.subtitle}>Handelskompagni</span>
        </div>
    );
};

export default Logo;
