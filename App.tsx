import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([
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

      <InputTodo />
      <ListTodo
        todoList={todoList}
      />


    </View>
  );
}

const styles = StyleSheet.create({

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
