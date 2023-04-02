import { Header, Navigation } from '@components/index';
import { Outlet } from 'react-router-dom';
import List from '@components/list/list.component';
import Sidebar from '@components/sidebar/sidebar.component';
import useDashboardStyles from './dashboard.component.styles';
import DashboardComponent from './dashboard.component.types';

const Dashboard: DashboardComponent = ({ title, items }) => {
    const styles = useDashboardStyles();

    return (
        <>
            <Header />
            <Navigation />
            <div className={styles.layout}>
                <Sidebar>
                    <List title={title} items={items} />
                </Sidebar>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
