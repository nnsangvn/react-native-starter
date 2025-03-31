import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

const Home = () => {
    const navigation: any = useNavigation();

    return (
        <View>
            <Text>
                Home component
            </Text>
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate("HomeDetails")
                }
            />
        </View>
    )
}

export default Home;