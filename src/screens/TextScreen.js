import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

const TextScreen = () => {
const [name, setName] = useState('')
return <View>
<Text style={styles.textStyle}>Enter Name:</Text>
<TextInput 
style={styles.input}
autoCapitalize="none"
autoCorrect={false}
value={name}
onChangeText={(newValue) => setName(newValue)}
/>
<Text style={styles.textStyle}>My name is {name}</Text>
</View>
};

const styles = StyleSheet.create({
textStyle: {
	fontSize: 20
},
input: {
	margin: 15,
	borderColor: 'black',
	borderWidth: 1
}
});

export default TextScreen;
