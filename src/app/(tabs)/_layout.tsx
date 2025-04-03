import { Tabs } from "expo-router"

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen
                name="index" />
            <Tabs.Screen
                name="setting"
                options={{ headerTitle: "Setting" }} />
        </Tabs>
    )
}

export default TabLayout;