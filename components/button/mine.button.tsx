import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


const styles = StyleSheet.create(
    {
        btnContaier: {
            borderColor: "",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 10,
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            alignSelf: 'flex-start',
            backgroundColor: '#ccc',
        },
        style: {
            textTransform: "uppercase"
        }
    }
)

interface IProps {
    title: string;
    onPress: () => void;
}

const MineButton = (props: IProps) => {
    const { title, onPress } = props;
    return (
        <>
            <Pressable
                style={({ pressed }) => ({
                    opacity: pressed === true ? 0.5 : 1,
                    alignSelf: 'flex-start',
                })}
                onPress={onPress}
            >
                <View style={styles.btnContaier}>
                    <AntDesign
                        name="pluscircleo"
                        size={32}
                        color="black" />
                    <Text style={styles.style}>{title}</Text>
                </View>
            </Pressable >
        </>
    )
}

export default MineButton;