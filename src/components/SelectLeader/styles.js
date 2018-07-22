import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	number: {
		fontSize: 100,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	hidden: {
		opacity: 0,
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		maxHeight: 170,
	},
	blueBar: {
		marginTop: 30,
	},
	continueContainer: {
		flex: 1,
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
	},
	continueButton: {
		marginBottom: 30,
	},
});

export default styles;
