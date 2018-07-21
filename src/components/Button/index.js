import React from 'react';
import {
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import styles from './styles';

const Button = ({text, onPress, buttonStyles, textStyles}) => (
	<TouchableOpacity
		style={[styles.button, buttonStyles ? buttonStyles : null]}
		onPress={onPress ? () => { onPress() } : null}
		activeOpacity={0.7}
	>
		<Text style={[styles.text, textStyles ? textStyles : null]}>{text}</Text>
	</TouchableOpacity>
);

export default Button;
