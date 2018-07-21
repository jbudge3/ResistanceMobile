import React from 'react';
import {
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import styles from './styles';

const Button = (props) => {
	const {
		type,
		onPress,
		buttonStyles,
		textStyles,
		disabled
	} = props;

	const content = type === 'text' ? <Text style={[styles.text, textStyles ? textStyles : null]}>{props.children}</Text> : props.children;

	return (
		<TouchableOpacity
			style={[styles.button, buttonStyles ? buttonStyles : null]}
			onPress={onPress ? () => { onPress() } : null}
			activeOpacity={0.7}
			disabled={disabled}
		>
			{content}
		</TouchableOpacity>
	);
};

export default Button;
