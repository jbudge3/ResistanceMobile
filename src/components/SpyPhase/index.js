import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderText from '../HeaderText';
import Button from '../Button';
import ColorBar from '../ColorBar';

import globalStyles from '../../globalStyles';
import styles from './styles';

const SpyPhase = ({handleContinueOnPress}) => {
	const narration = new Sound('narration.mp3', Sound.MAIN_BUNDLE, (error) => {
		if (error) {
			console.log('failed to load the sound', error);
		} else {
			console.log('duration in seconds: ' + narration.getDuration() + 'number of channels: ' + narration.getNumberOfChannels());
		}
	});

	return (
		<View style={styles.container}>
			<HeaderText>Spy Phase</HeaderText>
			<ColorBar color="blue" barStyles={styles.blueBar} />

			<View style={styles.playback}>
				<Button onPress={() => {narration.pause()}}>
					<Icon name="pause" size={30} color="#fff" />
				</Button>
				<Button onPress={() => {narration.play()}}>
					<Icon name="play" size={30} color="#fff" />
				</Button>
				<Button onPress={() => {narration.stop()}}>
					<Icon name="undo" size={30} color="#fff" />
				</Button>
			</View>

			<ColorBar color="red" barStyles={styles.redBar} />
			<Button type="text" onPress={handleContinueOnPress}>Start Game</Button>
		</View>
	);
}

export default SpyPhase;
