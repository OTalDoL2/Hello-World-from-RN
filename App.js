import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.setColorB1]}> +-+-+-+-+-+ +-+-+-+-+-+ </Text>
      <Text style={[styles.setColorB5]}> |H|e|l|l|o| |W|o|r|l|d| </Text>
      <Text style={[styles.setColorB7]}> +-+-+-+-+-+ +-+-+-+-+-+ </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

    alignItems: 'center',
    justifyContent: 'center',

   
  },

  setColorB1 : {
    color: '#006080'
  },
  setColorB2 : {
    color: '#007399'
  },
  setColorB3 : {
    color: '#0086b3'
  },
  setColorB4 : {
    color: '#0099cc'
  },
  setColorB5 : {
    color: '#00ace6'
  },
  setColorB6 : {
    color: '#00bfff'
  },
  setColorB7 : {
    color: '#1ac6ff'
  },
});