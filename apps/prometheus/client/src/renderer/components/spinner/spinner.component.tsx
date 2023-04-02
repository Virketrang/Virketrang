import useSpinnerStyles from './spinner.component.styles';
import SpinnerComponent from './spinner.component.types';

const Spinner: SpinnerComponent = () => {
    const styles = useSpinnerStyles();

    return <span>Indlæser...</span>;
};

export default Spinner;
