import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // data-types

  // string
  const [name, setName] = useState<string>("Nhat Sang");

  // number
  const [age, setAge] = useState<number>(23);

  // null , undefine, boolean
  const test = null;

  // object, array
  const [person, serPerson] = useState({
    name: "Sang",
    age: 23,
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} >{name}</Text>
        <Text style={styles.text} >{age}</Text>
        <Text style={styles.text} >{JSON.stringify(person)}</Text>
      </View>
      <Text>Hello
        <Text style={styles.worldtext}> World!!!</Text>
      </Text>
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
