import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ColorBar = ({color, barStyles}) => (
	<View style={[styles[color], barStyles ? barStyles : null]} />
);

export default ColorBar;
