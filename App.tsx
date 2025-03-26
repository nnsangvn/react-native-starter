import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // string
  const [name, setName] = useState<string>("");

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

      <Button title='Add new' />
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
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});
