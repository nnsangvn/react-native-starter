import { Slot } from "expo-router";
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        <View style={{ margin: 50 }}>
            <Text>
                Header
            </Text>
            {/* Slot: Tất cả component child sẽ render tại khoảng không này */}
            <Slot />
            <Text>
                Footer
            </Text>
        </View>
    )
}

export default RootLayout;