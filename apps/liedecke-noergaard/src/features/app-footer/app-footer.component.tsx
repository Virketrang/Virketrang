import AppFooterComponent from './app-footer.component.types';
import styles from './app-footer.component.module.sass';
import { memo } from 'react';

const AppFooter: AppFooterComponent = memo(({}) => {
    return <footer className={styles.footer}></footer>;
});

export default AppFooter;
