import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import ShareButton from "components/button/share.button";
import { APP_COLOR } from "utils/constant";
import bg from '@/assets/auth/welcome-background.png';
import fbLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';
import { LinearGradient } from 'expo-linear-gradient';
import TextBetweenLine from "@/components/button/text.between.line";
import { Link, Redirect } from "expo-router";


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingHorizontal: 10
        },
        welcomeText: {
            flex: 0.6,
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 20
        },
        welcomeBtn: {
            flex: 0.4,
            gap: 30
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
    }
)

const WelcomePage = () => {
    if (true) {
        return (
            <Redirect href={"/(auth)/verify"}></Redirect>
        )
    }
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={bg}
        >
            <LinearGradient
                // Background Linear Gradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F',]}
                locations={[0.2, 0.8]}
            >
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
                        <TextBetweenLine title="Đăng nhập với" />
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
                                    <Image source={fbLogo} />
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
                                    <Image source={ggLogo} />
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
                                    borderColor: "#505050",
                                    borderWidth: 1,
                                }}
                                pressStyle={{ alignSelf: "stretch" }}

                            ></ShareButton>

                        </View>
                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                color: "white",
                            }}>
                                Chưa có tài khoản?
                            </Text>
                            <Link href={"/(auth)/signup"}>
                                <Text style={{ color: "white", textDecorationLine: 'underline' }}>
                                    Đăng ký.
                                </Text>
                            </Link>

                        </View>
                    </View>
                </View >
            </LinearGradient>
        </ImageBackground>
    )
}

export default WelcomePage;