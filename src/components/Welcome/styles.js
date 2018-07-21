import {StyleSheet} from 'react-native';
import globalStyles from '../../globalStyles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	small: {
		color: 'white',
		fontSize: 15,
		alignSelf: 'flex-start',
		marginBottom: 20,
	},
	title: {
		color: 'white',
		fontSize: 80,
	},
	buttonStyles: {
		width: 150,
		marginTop: 20
	},
});

export default styles;
