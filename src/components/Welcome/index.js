import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Button from '../Button';
import ColorBar from '../ColorBar';

import globalStyles from '../../globalStyles';
import styles from './styles';

const Welcome = ({handleStartOnPress, hidden}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.small}>Welcome to...</Text>
			<ColorBar color="blue" />
			<Text style={styles.title}>THE RESISTANCE</Text>
			<ColorBar color="red" />
			<Button type="text" buttonStyles={styles.buttonStyles} onPress={handleStartOnPress}>Start</Button>
		</View>
	);
}

export default Welcome;
