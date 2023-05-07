import { Stack } from 'expo-router';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Colors from '@resolut/colors';
import { FontWeight } from '@css-properties/native';

const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.orange[400],
    },
    headerTintColor: Colors.pink[700],
    headerTitleStyle: {
        fontWeight: FontWeight.bold,
    },
};

export default function RootLayout() {
    return (
        <Stack screenOptions={screenOptions}>
            {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="authentication" options={{ presentation: 'modal' }} /> */}
            <Stack.Screen name="index" options={{ title: 'Welcome' }} />
        </Stack>
    );
}
