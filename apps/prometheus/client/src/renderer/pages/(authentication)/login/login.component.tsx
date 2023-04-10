import { Form, Input, Typography } from 'resolut';
import { FieldGroup } from '@resolut/forms';

import styles from './login.component.module.sass';

const Login = () => {
    return (
        <Form className={styles.loginForm}>
            <Typography component="heading4" align="center" style={{ marginBottom: '0.25em' }}>
                Velkommen tilbage
            </Typography>
            <Typography component="subtitle2" align="center">
                Indtast venligst nedenstående oplysninger
            </Typography>
            <FieldGroup gap="1rem" direction="horizontal">
                <Input name="email" shape="rounded" />
                <Input name="password" shape="rounded" />
            </FieldGroup>
        </Form>
    );
};

export default Login;
