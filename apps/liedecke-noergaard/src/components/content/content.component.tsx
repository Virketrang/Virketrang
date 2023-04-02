import ContentComponent from './content.component.types';
import styles from './content.component.module.sass';

const Content: ContentComponent = ({ children }) => {
    return <div className={styles.content}>{children}</div>;
};

export default Content;
