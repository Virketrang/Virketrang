import useSidebarStyles from './sidebar.component.styles';
import SidebarComponent from './sidebar.component.types';

const Sidebar: SidebarComponent = ({ children }) => {
    const styles = useSidebarStyles();

    return <aside className={styles.sidebar}>{children}</aside>;
};

export default Sidebar;
