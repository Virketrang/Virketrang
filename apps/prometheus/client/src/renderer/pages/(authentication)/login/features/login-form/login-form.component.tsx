import { Form, Typography, FieldGroup, Input } from 'resolut';

import LoginForm from './login-form.component.types';
import styles from './login-form.component.module.sass';

const LoginForm: LoginForm = () => {
    return (
        <Form className={styles.loginForm}>
            <Typography component="heading4" align="center" style={{ marginBottom: '0.25em' }}>
                Velkommen tilbage
            </Typography>
            <Typography component="subtitle2" align="center">
                Indtast venligst nedenstående oplysninger
            </Typography>
            <FieldGroup gap="1rem" direction="horizontal">
                <Input placeholder="e-mail" name="email" shape="rounded" />
                <Input placeholder="adgangskode" name="password" shape="rounded" />
            </FieldGroup>
        </Form>
    );
};

export default LoginForm;
