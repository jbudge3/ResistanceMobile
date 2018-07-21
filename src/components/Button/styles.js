import {StyleSheet} from 'react-native';
import globalStyles from '../../globalStyles';

const styles = StyleSheet.create({
	button: {
		borderRadius: 5,
		backgroundColor: globalStyles.BUTTON_GRAY,
		padding: 10,
		paddingHorizontal: 30,
	},
	text: {
		color: '#FFFFFF',
		fontSize: 30,
		textAlign: 'center',
	},
});

export default styles;
