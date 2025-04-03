import { Link } from "expo-router";
import { View, Text } from "react-native"


const HomePage = () => {
    return (
        <View>
            <Text>Home Page</Text>
            <Link href={"/product"}> Go product</Link>
            <Link href={"/login"}> Go login</Link>
        </View>
    )
}

export default HomePage;