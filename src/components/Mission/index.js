import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import globalStyles from '../../globalStyles';

import {getNumberNeededForMission} from '../../utils';

const Mission = (props) => {
	const {
		number,
		players,
		isCurrentMission,
		failed,
		successful,
		failMission,
		succeedMission,
	} = props;

	let circleContent = <Text style={styles.number}>{getNumberNeededForMission(number, players)}</Text>;
	const circleStyles = [styles.circle];

	if (successful) {
		circleContent = <Icon name="check" color={globalStyles.MEDIUM_BLUE} size={60} />;
		circleStyles.push(styles.blueCircle);
	} else if (failed) {
		circleContent = <Icon name="times" color={globalStyles.MEDIUM_RED} size={60} />;
		circleStyles.push(styles.redCircle);
	}

	return (
		<View style={styles.container}>
			{isCurrentMission && (
				<TouchableOpacity onPress={succeedMission}>
					<Icon name="check-circle" color={globalStyles.MEDIUM_BLUE} size={50} />
				</TouchableOpacity>
			)}

			<View style={circleStyles}>
				{circleContent}
			</View>

			{isCurrentMission && (
				<TouchableOpacity onPress={failMission}>
					<Icon name="times-circle" color={globalStyles.MEDIUM_RED} size={50} />
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Mission;
