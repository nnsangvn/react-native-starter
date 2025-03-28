import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create(
    {
        todoInput: {
            borderColor: "violet",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
        }
    }
)

interface IProps {
    addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
    const { addTodo } = props;
    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        // validate todo
        if (!name) {
            // alert("name is empty")
            Alert.alert(
                "Thông báo",
                "Nội dung không được để trống",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],)

            // return để thoát hàm, không chạy addTodo và setName
            return
        }
        // add todo
        addTodo(name);
        // set input = empty
        setName("");
    }

    return (
        <>
            <View>
                <TextInput
                    onChangeText={t => setName(t)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.todoInput} />
                <Button
                    title='Add new'
                    onPress={handleAddNewTodo}
                />
            </View>
        </>
    )
}

export default InputTodo;