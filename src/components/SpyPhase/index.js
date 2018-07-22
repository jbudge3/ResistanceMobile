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
			<Button onPress={() => {narration.pause()}} type="text">
				<Icon name="pause" size={30} color="#fff" />
			</Button>
			<Button onPress={() => {narration.play()}} type="text">
				<Icon name="play" size={30} color="#fff" />
			</Button>
			<Button onPress={() => {narration.stop()}} type="text">
				<Icon name="stop" size={30} color="#fff" />
			</Button>
			<ColorBar color="red" />
		</View>
	);
}

export default SpyPhase;
