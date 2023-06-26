import { Stack } from 'expo-router'

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/signin/index" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="(auth)/signup/index" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}
