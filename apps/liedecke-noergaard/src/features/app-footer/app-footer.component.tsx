import { memo } from 'react';

import AppFooterComponent from './app-footer.component.types';
import styles from './app-footer.component.module.sass';

const AppFooter: AppFooterComponent = memo(({}) => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.section}>
                <li>
                    <h4>Overskrift</h4>
                </li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </ul>
            <ul className={styles.section}>
                <li>
                    <h4>Information</h4>
                </li>
                <li>Handelsbetingelser</li>
                <li>Privatlivspolitik</li>
                <li>Cookiepolitik</li>
                <li>Ofte stillede spørgsmål</li>
            </ul>
            <ul className={styles.section}>
                <li>
                    <h4>Om os</h4>
                </li>
                <li>Bæredygtighed</li>
                <li>Filosofi</li>
            </ul>
            <div className={styles.last}>
                <ul className={styles.section}>
                    <li>
                        <h4>Kontakt</h4>
                    </li>
                    <li>Tlf.nr. (+45) 30 28 82 55</li>
                    <li>E-mail: kontakt@virketrang.com</li>
                </ul>
                <ul className={styles.socials}>
                    <li className={styles.facebook}>f</li>
                    <li className={styles.instagram}>i</li>
                    <li className={styles.linkedin}>in</li>
                    <li className={styles.google}>g</li>
                </ul>
            </div>
        </footer>
    );
});

AppFooter.displayName = 'AppFooter';

export default AppFooter;
