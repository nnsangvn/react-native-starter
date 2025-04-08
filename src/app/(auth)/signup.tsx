import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { APP_COLOR } from "@/utils/constant"
import { Link } from "expo-router"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const styles = StyleSheet.create({
      container: {
            flex: 1,
            marginHorizontal: 20,
            gap: 10
      },

})

const SignUpPage = () => {
      return (

            <SafeAreaView style={{ flex: 1 }}>
                  <View style={styles.container}>
                        <View>
                              <Text style={{
                                    fontSize: 25,
                                    fontWeight: 600,
                                    marginVertical: 30
                              }}>Đăng ký tài khoản</Text>
                        </View>
                        <ShareInput title="Họ tên"
                        />
                        <ShareInput
                              title="Email"
                              keyboardType="email-address"
                        />
                        <ShareInput title="Password"
                        />

                        {/* <View style={styles.inputGroup}>
                              <Text style={styles.text}>Email</Text>
                              <TextInput
                                    style={styles.input}
                                    keyboardType="email-address"
                                    placeholder="Email"
                              />
                        </View>
                        <View style={styles.inputGroup}>
                              <Text style={styles.text}>Password</Text>
                              <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                              />
                        </View> */}

                        <View style={{ marginVertical: 10 }}></View>
                        <ShareButton
                              title="Đăng ký"
                              onPress={() => { alert("alert me") }}
                              textStyle={{
                                    textTransform: "uppercase",
                                    color: "#FFF",
                                    paddingVertical: 5
                              }}
                              btnStyle={{
                                    backgroundColor: APP_COLOR.ORANGE,
                                    justifyContent: "center",
                                    marginHorizontal: 50,
                                    paddingVertical: 10,
                                    borderRadius: 30,
                              }}
                              pressStyle={{ alignSelf: "stretch" }}

                        ></ShareButton>

                        <View style={{
                              marginVertical: 15,
                              flexDirection: "row",
                              gap: 10,
                              justifyContent: "center"
                        }}>
                              <Text style={{
                                    color: "black",
                              }}>
                                    Đã có tài khoản?
                              </Text>
                              <Link href={"/(auth)/signup"}>
                                    <Text style={{ color: "black", textDecorationLine: 'underline' }}>
                                          Đăng nhập
                                    </Text>
                              </Link>

                        </View>
                        <SocialButton />


                  </View>

            </SafeAreaView>
      )
}

export default SignUpPage;