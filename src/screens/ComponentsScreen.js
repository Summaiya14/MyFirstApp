import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const name = 'Summaiya Mehmood';
  return <View>
  <Text style={styles.textStyle}>Getting started with react native!</Text>
  <Text style={styles.subStyle}>My name is {name}</Text>
  </View>

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subStyle : {
  	  fontSize: 20
  }
});

export default ComponentsScreen;

