import { StyleSheet, Text, View } from "react-native"
import ShareButton from "components/button/share.button";
import { APP_COLOR } from "utils/constant";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


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
            gap: 20
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
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "red",
                    marginHorizontal: 50
                }}>
                    <Text style={{
                        padding: 10,
                        textAlign: "center",
                        backgroundColor: "white",
                        alignSelf: "center",
                        position: "relative",
                        top: 20
                    }}>
                        Đăng nhập với
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 30
                }}>
                    <ShareButton
                        title="facebook"
                        onPress={() => { alert("alert me") }}
                        textStyle={{ textTransform: "uppercase" }}
                        btnStyle={{
                            backgroundColor: "#FFF",
                            justifyContent: "center",
                            borderRadius: 30,
                        }}
                        icons={
                            <FontAwesome5 name="facebook" size={24} color="black" />
                        }
                    ></ShareButton>
                    <ShareButton
                        title="google"
                        onPress={() => { alert("alert me") }}
                        textStyle={{ textTransform: "uppercase" }}
                        btnStyle={{
                            backgroundColor: "#FFF",
                            justifyContent: "center",
                            paddingHorizontal: 20,
                            borderRadius: 30,
                        }}
                        icons={
                            <FontAwesome5 name="google" size={24} color="black" />
                        }
                    ></ShareButton>


                </View>
                <View>
                    <ShareButton
                        title="Đăng nhập với Email"
                        onPress={() => { alert("alert me") }}
                        textStyle={{ color: "#FFF", paddingVertical: 5 }}
                        btnStyle={{
                            backgroundColor: "#2c2c2c",
                            justifyContent: "center",
                            marginHorizontal: 50,
                            paddingVertical: 10,
                            borderRadius: 30,
                        }}
                        pressStyle={{ alignSelf: "stretch" }}

                    ></ShareButton>

                </View>
                <View>
                    <Text style={{ textAlign: "center" }}>Chưa có tài khoản? Đăng ký</Text>
                </View>
            </View>
        </View >
    )
}

export default WelcomePage;