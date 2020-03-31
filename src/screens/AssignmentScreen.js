import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const AssignmentScreen = () => {
return <View>

<View style={styles.viewOneStyle}/>
<View style={styles.viewTwoStyle}/>
<View style={styles.viewThreeStyle}/>

</View>

};

const styles = StyleSheet.create({
viewOneStyle: {
	height: 100,
	width: 100,
	backgroundColor: 'rgb(255, 0, 0)'

},
viewTwoStyle: {
	height: 100,
	width: 100,
	backgroundColor: 'rgb(127, 0, 255)',
	alignSelf: 'center'
},
viewThreeStyle: {
	height: 100,
	width: 100,
	backgroundColor: 'rgb(0, 255, 128)',
	alignSelf: 'flex-end',
	bottom: 200
}

});

export default AssignmentScreen;
