import { FlatList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    todo: {
        fontSize: 20,
        backgroundColor: "pink",
        marginBottom: 20,
        padding: 10,
    },
})

interface IProps {
    todoList: ITodo[]
}

const ListTodo = (props: IProps) => {
    const { todoList } = props;
    return (
        <>
            <FlatList
                style={{ marginTop: 20, borderColor: 'red', borderWidth: 1 }}
                data={todoList}
                // keyExtractor set key for child
                // keyExtractor trả về string, sử dụng + "" để convert item.id từ number -> string
                keyExtractor={item => item.id + ""}
                // object destructuring: data.item = {item}
                renderItem={({ item }) => {
                    return (
                        <Text
                            // key={item.id}
                            style={styles.todo}
                        >
                            {item.title}
                        </Text>
                    )
                }}
            />
        </>
    )
}

export default ListTodo;