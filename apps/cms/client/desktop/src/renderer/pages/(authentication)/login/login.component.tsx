import useLoginStyles from './login.component.styles';
import { Link } from 'react-router-dom';

const Login = () => {
    const styles = useLoginStyles();

    return <Link to="/webshop/products">Login</Link>;
};

export default Login;
