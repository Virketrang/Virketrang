import { AlignItems, Display, FontWeight, JustifyContent, TextAlign } from '@css-properties/native';
import Colors from '@resolut/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.white,
        flex: 1,
        width: '100%',
        padding: 10,
    },
    titleContainer: {
        display: Display.flex,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.center,
        flex: 2,
    },
    title: {
        textAlign: TextAlign.center,
        fontSize: 30,
        fontWeight: FontWeight.bold,
    },
    login: { flex: 3, gap: 10 },
    loginButton: { marginTop: 20 },
    helperText: {
        fontSize: 24,
    },
    alternativeLogin: { flex: 3 },
    input: {
        borderWidth: 1,
        borderColor: Colors.grey[400],
        padding: 10,
        fontSize: 20,
    },
    or: {
        textAlign: TextAlign.center,
    },
});

export default styles;
