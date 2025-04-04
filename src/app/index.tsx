import { StyleSheet, Text, View } from "react-native"
import ShareButton from "../components/button/share.button";
import { APP_COLOR } from "../utils/constant";
import AntDesign from '@expo/vector-icons/AntDesign';


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            borderColor: "red",
            borderWidth: 5,

        },
        welcomeText: {
            flex: 0.6,
            borderColor: "green",
            borderWidth: 5,
            alignItems: "flex-start",
            justifyContent: "center",
        },
        welcomeBtn: {
            flex: 0.4,
            borderColor: "grey",
            borderWidth: 5,
        },
        heading: {
            fontSize: 40,
            fontWeight: "600"
        },
        body: {
            fontSize: 30,
            fontWeight: "400",
            color: APP_COLOR.ORANGE,
            marginVertical: 10
        },
        footer: {
            fontSize: 24,
            fontWeight: "300"

        },
        btnContainer: {},
        btnContent: {
            backgroundColor: "green",
            padding: 20,
            borderRadius: 10,
            alignSelf: "flex-start"
        },
        btnText: {
            textTransform: "uppercase",

        }
    }
)

const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeText}>
                <Text style={styles.heading}>
                    Welcome To
                </Text>
                <Text style={styles.body}>
                    FoodHub
                </Text>
                <Text style={styles.footer}>
                    Nền tảng giao đồ ăn
                </Text>
            </View>

            <View style={styles.welcomeBtn}>
                <Text>
                    Đăng nhập với
                </Text>
                <View>
                    <ShareButton
                        title="facebook"
                        onPress={() => { alert("alert me") }}
                        textStyle={{ textTransform: "lowercase" }}
                        pressStyle={{ alignSelf: "stretch" }}
                        btnStyle={{
                            // backgroundColor: "green",
                            justifyContent: "center"
                        }}
                        icons={
                            <AntDesign
                                name="pluscircleo"
                                size={32}
                                color="black" />
                        }
                    ></ShareButton>
                    {/* <View style={styles.btnContainer}>
                        <View style={styles.btnContent}>
                            <Text style={styles.btnText}>Facebook</Text>
                        </View>
                    </View> */}
                    <View><Text>Google</Text></View>
                </View>
                <View>
                    <Text>Đăng nhập với Email</Text>
                </View>
                <View>
                    <Text>Chưa có tài khoản? Đăng ký</Text>
                </View>
            </View>
        </View>
    )
}

export default WelcomePage;