import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

const TextScreen = () => {
const [password, setPassword] = useState('')
return <View>
<Text style={styles.textStyle}>Enter Password:</Text>
<TextInput 
style={styles.input}
autoCapitalize="none"
autoCorrect={false}
value={password}
onChangeText={(newValue) => setPassword(newValue)}
/>
{password.length < 5 ? <Text>Password must be 5 characters</Text> : null}

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
