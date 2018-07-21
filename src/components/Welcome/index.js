import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Button from '../Button';

import globalStyles from '../../globalStyles';
import styles from './styles';

const Welcome = ({handleStartOnPress, hidden}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.small}>Welcome to...</Text>
			<View style={styles.blueLine} />
			<Text style={styles.title}>THE RESISTANCE</Text>
			<View style={styles.redLine} />
			<Button text="Start" buttonStyles={styles.buttonStyles} onPress={handleStartOnPress} />
		</View>
	);
}

export default Welcome;
