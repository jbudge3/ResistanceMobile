import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../Button';
import Mission from '../Mission';

import styles from './styles';

const GameBoard = (props) => {
	const {
		numberOfPlayers,
		currentMission,
		missionStats,
		succeedMission,
		failMission,
	} = props;
	const {successful, failed} = missionStats;

	const missionNumbers = [1, 2, 3, 4, 5];
	const missions = missionNumbers.map((mission) => {
		return (
			<Mission
				number={mission}
				key={mission}
				players={numberOfPlayers}
				isCurrentMission={mission === currentMission}
				failed={failed.indexOf(mission) !== -1}
				successful={successful.indexOf(mission) !== -1}
				succeedMission={succeedMission}
				failMission={failMission}
			/>
		);
	});

	return (
		<View style={styles.container}>
			<View>
				<Button>
					<Icon name="undo" color="#fff" size={30} />
				</Button>
			</View>
			<View style={styles.missionsContainer}>
				{missions}
			</View>
			<View>
				<Text>Bottom Content</Text>
			</View>
		</View>
	);
};

export default GameBoard;
