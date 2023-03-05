import { Outlet } from 'react-router-dom';
import useAuthenticationStyles from './authentication.component.styles';
import AuthenticationComponent from './authentication.component.types';

const Authentication: AuthenticationComponent = () => {
    const styles = useAuthenticationStyles;

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Authentication;
