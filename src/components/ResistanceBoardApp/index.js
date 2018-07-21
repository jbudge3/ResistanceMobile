import React, {Component} from 'react';
import {
	View,
	Text,
	Alert,
	LayoutAnimation,
	TouchableOpacity
} from 'react-native';
import Welcome from '../Welcome';
import {DEFAULT_STATE} from './constants';
import styles from './styles';

export default class ResistanceBoardApp extends Component {
	constructor(props) {
		super(props);

		this.state = DEFAULT_STATE;

		this._addFailedMission = this._addFailedMission.bind(this);
		this._addSuccessfulMission = this._addSuccessfulMission.bind(this);
		this._advanceVoteTrack = this._advanceVoteTrack.bind(this);
		this._editNumberOfPlayers = this._editNumberOfPlayers.bind(this);
		this._showSelectedMissionLeader = this._showSelectedMissionLeader.bind(this);
		this._transitionToNextView = this._transitionToNextView.bind(this);
		this._triggerResistanceVictory = this._triggerResistanceVictory.bind(this);
		this._triggerSpyVictory = this._triggerSpyVictory.bind(this);
	}

	render() {
		return (
			<View style={styles.appContainer}>
				<View>
					{this._renderCurrentView(this.state.currentView)}
				</View>
			</View>
		)
	}

	// Add mission to total failed missions
	_addFailedMission() {
		if (this.state.gameOver) {
			return;
		}

		const newFailedArray = this.state.missions.failed.slice();
		newFailedArray.push(this.state.currentMission);

		this.setState({
			missions: {
				failed: newFailedArray
			},
			currentMission: this.state.currentMission + 1,
			voteTrack: 1
		});

		if (newFailedArray.length === 3) {
			this._triggerSpyVictory();
		}
	}

	// Add mission to total successful missions
	_addSuccessfulMission() {
		if (this.state.gameOver) {
			return;
		}

		const newSuccessfulArray = this.state.missions.successful.slice();
		newSuccessfulArray.push(this.state.currentMission);

		this.setState({
			missions: {
				successful: newSuccessfulArray
			},
			currentMission: this.state.currentMission + 1,
			voteTrack: 1
		});

		if (newSuccessfulArray.length === 3) {
			this._triggerResistanceVictory();
		}
	}

	// Advance the vote track on the bottom left-hand corner of the game board screen
	_advanceVoteTrack() {
		if (this.state.voteTrack === 5) {
			Alert.alert(
				'Spy Victory?',
				'The vote track has gone beyond the 5th player; is this a spy victory?',
				[
					{text: 'Spies Win', onPress: () => { this._triggerSpyVictory() }},
					{text: 'Continue Playing', onPress: () => { this.setState({voteTrack: 1})}}
				]
			);
		} else {
			this.setState({voteTrack: this.state.voteTrack + 1});;
		}
	}

	// Edit the number of players
	_editNumberOfPlayers(type) {
		const {numberOfPlayers} = this.state;
		if (numberOfPlayers < 10 && numberOfPlayers > 5) {
			const newNumberOfPlayers = type === 'add' ? this.state.numberOfPlayers + 1 : this.state.numberOfPlayers - 1;

			this.setState({
				numberOfPlayers: newNumberOfPlayers
			});
		}
	}

	// Render correct view according to state
	_renderCurrentView(view) {
		let currentView;

		switch(view) {
			case 0:
				currentView = <Welcome handleStartOnPress={this._transitionToNextView} />;
				break;
			case 1:
				currentView = <Text>Hello, I'm the next view</Text>;
				break;
			default:
				currentView = <Text>Hello, I'm the default view</Text>;
		}

		return currentView;
	}

	// Reveal the selected mission leader
	_showSelectedMissionLeader() {
		this.setState({
			showLeaderResult: true
		});
	}

	// Transition to the next view in the game setup process
	_transitionToNextView() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({
			currentView: this.state.currentView + 1
		});
	}

	// Trigger a "resistance" victory
	_triggerResistanceVictory() {
		this.setState({
			gameOver: 'resistance'
		});
	}

	// Trigger a "spy victory" state
	_triggerSpyVictory() {
		this.setState({
			gameOver: 'spies'
		});
	}

}