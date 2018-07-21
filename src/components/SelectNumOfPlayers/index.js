import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Button from '../Button';
import HeaderText from '../HeaderText';
import {getNumberOfSpies} from '../../utils';

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
		<View style={styles.container}>
			<HeaderText>Select number of players</HeaderText>

			<View style={styles.counter}>
				<Button
					text="-"
					onPress={handleSubtractPlayer}
					disabled={numberOfPlayers === 5 ? true : null}
				/>

				<View style={styles.numberContainer}>
					<Text style={styles.number}>{numberOfPlayers}</Text>
					<HeaderText>Spies: {getNumberOfSpies(numberOfPlayers)}</HeaderText>
				</View>

				<Button
					text="+"
					onPress={handleAddPlayer}
					disabled={numberOfPlayers === 10 ? true : null}
				/>
			</View>

			<Button text="Continue" onPress={handleContinueOnPress} />
		</View>
	);
};

export default SelectNumOfPlayers;
