import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	View,
	Text,
	ActivityIndicator,
	LayoutAnimation,
} from 'react-native';

import ColorBar from '../ColorBar';
import HeaderText from '../HeaderText';
import Button from '../Button';
import {selectRandomLeader} from '../../utils';

import styles from './styles';

export default class SelectLeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: 'waiting',
			leader: selectRandomLeader(props.numberOfPlayers),
		};

		this._renderMainContent = this._renderMainContent.bind(this);
		this._handleSelectLeaderPress = this._handleSelectLeaderPress.bind(this);
	}

	render() {
		return (
			<View style={styles.container}>
				<HeaderText>Select the first Mission Leader</HeaderText>

				<ColorBar color="blue" barStyles={styles.blueBar} />

				<View style={styles.main}>
					{this._renderMainContent(this.state.status)}
				</View>

				<ColorBar color="red" barStyles={styles.redBar} />

				<View style={[styles.continueContainer, this.state.status === 'selected' ? null : styles.hidden]}>
					<Button
						type="text"
						onPress={this.props.handleContinueOnPress}
						buttonStyles={styles.continueButton}
					>
						Continue
					</Button>
					<HeaderText headerStyles={styles.instruction}>Count starting at this player</HeaderText>
					<Icon name="arrow-circle-down" size={60} color="#fff" />
				</View>

			</View>
		);
	}

	_handleSelectLeaderPress() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({
			status: 'inProgress'
		});

		setTimeout(() => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			this.setState({
				status: 'selected'
			});
		}, 1500);
	}

	_renderMainContent(status) {
		switch(status) {
			case 'waiting':
				return <Button type="text" onPress={this._handleSelectLeaderPress}>Select Leader</Button>;
			case 'inProgress':
				return <ActivityIndicator size="large" color="#fff" />;
			case 'selected':
				return <Text style={styles.number}>{this.state.leader}</Text>
			default:
				return <Button>Select Leader</Button>;
		}
	}

}
