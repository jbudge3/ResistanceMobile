import {StyleSheet} from 'react-native';
import globalStyles from '../../globalStyles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 150,
	},
	circle: {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#fff',
		borderWidth: 10,
		borderRadius: 75,
		maxHeight: 150,
		width: 150,
		marginTop: 15,
		marginBottom: 15,
	},
	number: {
		fontSize: 60,
		color: '#fff',
	},
	blueCircle: {
		backgroundColor: 'rgba(32, 71, 113, 0.4)',
		borderColor: globalStyles.DARK_BLUE,
	},
	redCircle: {
		backgroundColor: 'rgba(111, 23, 29, 0.4)',
		borderColor: globalStyles.DARK_RED,
	},
});

export default styles;
