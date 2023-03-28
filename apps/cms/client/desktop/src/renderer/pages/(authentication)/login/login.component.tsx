import useLoginStyles from './login.component.styles';
import { Button, Typography } from '@virketrang/resolut-react';
import { Field, Form } from '@virketrang/forms';

const Login = () => {
    const styles = useLoginStyles();

    function handleSubmit(form: any) {
        console.log(form);
    }

    return (
        <>
            <Button to="/webshop/products" shape="round" grow={false}>
                Login
            </Button>
            <Typography component="heading1" element="h1">
                Tryk for at logge ind
            </Typography>
            <Form onSubmit={handleSubmit}>
                <Field>
                    <label htmlFor="name"></label>
                    <input type="text" name="name" />
                </Field>
                <div>
                    <Field>
                        <label htmlFor="password"></label>
                        <input type="text" name="password" />
                    </Field>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};

export default Login;
