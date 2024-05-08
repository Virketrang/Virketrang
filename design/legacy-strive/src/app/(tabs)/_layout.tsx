import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home/index" options={{ title: 'Home' }} />
            <Tabs.Screen name="overview/index" options={{ title: 'Overview' }} />
        </Tabs>
    )
}

export default TabsLayout
