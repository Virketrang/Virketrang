import { Slot } from 'expo-router';
import { View } from 'react-native';
import styles from './authentication.component.styles';

const AuthenticationLayout = () => {
    return (
        <View style={styles.layout}>
            <Slot />
        </View>
    );
};

export default AuthenticationLayout;
