import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	counter: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		maxHeight: 170,
		marginBottom: 20,
	},
	numberContainer: {
		width: 300,
	},
	number: {
		fontSize: 100,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	spies: {
		fontSize: 50,
		color: '#fff',
	},
	blueBar: {
		marginTop: 30,
	},
	redBar: {
		marginBottom: 60,
	},
});

export default styles;
