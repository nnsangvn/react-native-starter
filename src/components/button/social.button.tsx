import { StyleSheet, View, Image } from "react-native"
import TextBetweenLine from "./text.between.line"
import ShareButton from "./share.button"
import fbLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';

const styles = StyleSheet.create(
      {
            welcomeBtn: {
                  flex: 1,
                  gap: 30
            }
      }
)

const SocicalButton = () => {
      return (
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
            </View>
      )
}

export default SocicalButton;