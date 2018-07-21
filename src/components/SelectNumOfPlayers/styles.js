import {StyleSheet} from 'react-native';
import globalStyles from '../../globalStyles';

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
		maxHeight: 300,
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
	}
});

export default styles;
