import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const Button = ({text}) => (
	<Text style={styles.header}>{text}</Text>
);

export default Button;
