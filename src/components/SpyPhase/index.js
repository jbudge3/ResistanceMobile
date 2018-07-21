import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Sound from 'react-native-sound';

import HeaderText from '../HeaderText';
import Button from '../Button';
import ColorBar from '../ColorBar';

import globalStyles from '../../globalStyles';
import styles from './styles';

const SpyPhase = ({handleStartOnPress, hidden}) => {
	const narration = new Sound('narration.mp3', Sound.MAIN_BUNDLE, (error) => {
		if (error) {
			console.log('failed to load the sound', error);
		} else {
			console.log('duration in seconds: ' + narration.getDuration() + 'number of channels: ' + narration.getNumberOfChannels());
		}
	});

	return (
		<View>
			<HeaderText>Spy Phase</HeaderText>
			<ColorBar color="blue" />
			<Button onPress={() => {narration.pause()}} type="text">Pause</Button>
			<Button onPress={() => {narration.play()}} type="text">Play</Button>
			<Button onPress={() => {narration.stop()}} type="text">Stop</Button>
			<ColorBar color="red" />
		</View>
	);
}

export default SpyPhase;
