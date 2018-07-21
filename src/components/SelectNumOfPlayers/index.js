import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Button from '../Button';
import HeaderText from '../HeaderText';

// import globalStyles from '../../globalStyles';
import styles from './styles';

const SelectNumOfPlayers = (props) => {
	const {
		numberOfPlayers,
		handleContinueOnPress,
		handleAddPlayer,
		handleSubtractPlayer,
	} = props;

	return (
		<View>
			<HeaderText text="Select your number of players"></HeaderText>
			<View>
				<Button text="-" onPress={handleSubtractPlayer} />
				<Text>{numberOfPlayers}</Text>
				<Button text="+" onPress={handleAddPlayer} />
			</View>
			<Button text="Continue" onPress={handleContinueOnPress} />
		</View>
	);
};

export default SelectNumOfPlayers;
