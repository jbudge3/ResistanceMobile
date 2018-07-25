import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const Button = ({headerStyles, children}) => (
	<Text style={[styles.header, headerStyles ? headerStyles : null]}>{children}</Text>
);

export default Button;
