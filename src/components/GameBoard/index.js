import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const GameBoard = (props) => {
	return (
		<View style={styles.container}>
			<View>
				<Text>Top Content</Text>
			</View>
			<View>
				<Text>Middle Content</Text>
			</View>
			<View>
				<Text>Bottom Content</Text>
			</View>
		</View>
	);
};

export default GameBoard;
