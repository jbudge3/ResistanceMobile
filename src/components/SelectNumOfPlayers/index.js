import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Button from '../Button';
import HeaderText from '../HeaderText';
import ColorBar from '../ColorBar';
import {getNumberOfSpies} from '../../utils';

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
			<ColorBar color="blue" barStyles={styles.blueBar} />

			<View style={styles.counter}>
				<Button
					type="text"
					onPress={handleSubtractPlayer}
					disabled={numberOfPlayers === 5 ? true : null}
				>
					-
				</Button>

				<View style={styles.numberContainer}>
					<Text style={styles.number}>{numberOfPlayers}</Text>
					<HeaderText>Spies: {getNumberOfSpies(numberOfPlayers)}</HeaderText>
				</View>

				<Button
					type="text"
					onPress={handleAddPlayer}
					disabled={numberOfPlayers === 10 ? true : null}
				>
					+
				</Button>
			</View>

			<ColorBar color="red" barStyles={styles.redBar} />
			<Button type="text" onPress={handleContinueOnPress}>Continue</Button>
		</View>
	);
};

export default SelectNumOfPlayers;
