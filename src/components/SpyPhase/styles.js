import {StyleSheet} from 'react-native';
import globalStyles from '../../globalStyles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	playback: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxHeight: 100,
		width: 400,
	},
	blueBar: {
		marginTop: 30,
	},
	redBar: {
		marginBottom: 60,
	},
});

export default styles;
