import styles from './spinner.component.module.sass';

const Spinner = () => {
    return <span role="spinbutton" className={styles.spinner}></span>;
};

export default Spinner;
