import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Some other text!</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title='Tap me!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 20, 
    padding: 10, 
    borderWidth: 2, 
    borderColor: 'green'
  }
});
