import { View, Text, Button } from "react-native"
import { Link, router } from "expo-router";

const AppRoot = () => {
    const handleLogin = () => {
        alert("Login")
        // router.navigate("/login");
        router.navigate("/user");
    }
    return (
        <View>
            <Text>11 Hello ReactNative Expo Router</Text>

            <Link href={"/namee"}>Go Namee</Link>
            <Link href={"/like/like.detail"} asChild>
                <Button title="Go to like detail" />
            </Link>

            <View style={{ margin: 20 }}>
                <Button title="Login" onPress={handleLogin} />
            </View>

        </View>
    )
}

export default AppRoot;