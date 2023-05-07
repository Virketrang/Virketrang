import { Text, TextInput, View } from 'react-native';

import { Button } from '@components/index';
import styles from './login.component.styles';

const Login = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Strive</Text>
            </View>
            <View style={styles.login}>
                <Text style={styles.helperText}>Login to your account</Text>
                <TextInput style={styles.input} placeholder="Username" />
                <TextInput style={styles.input} placeholder="Password" />
                <Button style={styles.loginButton} href="/core/home" stretch>
                    Login
                </Button>
            </View>
            <View style={styles.alternativeLogin}>
                <Text style={styles.or}>Or sign in with</Text>
                <View></View>
            </View>
        </View>
    );
};

export default Login;
