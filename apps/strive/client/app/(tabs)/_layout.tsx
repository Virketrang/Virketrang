import { Tabs } from 'expo-router';

export default function CoreLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
        </Tabs>
    );
}
