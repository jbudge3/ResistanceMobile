import {StyleSheet, Dimensions} from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		width: WINDOW_WIDTH,
	},
	missionsContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: WINDOW_WIDTH,
	},
});

export default styles;
