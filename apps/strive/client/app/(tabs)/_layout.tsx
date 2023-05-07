import { Tabs } from 'expo-router';

export default function CoreLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ title: 'Home' }} />
            <Tabs.Screen name="achievements" options={{ title: 'Achievements' }} />
        </Tabs>
    );
}
