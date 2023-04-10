import { Outlet } from 'react-router-dom';

import styles from './authentication.component.module.sass';
import AuthenticationComponent from './authentication.component.types';

const Authentication: AuthenticationComponent = () => {
    return (
        <main className={styles.authentication}>
            <Outlet />
        </main>
    );
};

export default Authentication;
