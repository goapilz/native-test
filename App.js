import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>xxx233 Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shakex your phone to open the developer menu.</Text>
	<Ionicons name='ios-pizza' color='red' size={180}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
