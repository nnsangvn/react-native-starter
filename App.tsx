import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // string
  const [name, setName] = useState<string>("");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 8, title: "Tony Kroos" },
    { id: 9, title: "Nine" },
    { id: 10, title: "M10" },
    { id: 11, title: "M11" },
    { id: 12, title: "M12" },
    { id: 13, title: "M13" },
    { id: 14, title: "M14" },
    { id: 15, title: "M15" },
  ])

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={t => setName(t)}
          value={name}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric'
          multiline={true}
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10,

          }} />

        <Text style={styles.text} >{name}</Text>
      </View>

      <Button
        title='Add new'
        onPress={() => alert('tap me')}
      />
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
      {/* <ScrollView style={{ marginTop: 20, borderColor: 'red', borderWidth: 1 }}>
        {todoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
          )
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 20,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 10,
  },
  worldtext: {
    color: "blue",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60,
    color: 'red',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});
