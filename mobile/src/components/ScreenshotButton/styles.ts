import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.surface_secondary,
		width: 40,
		height: 40,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8,
		position: 'relative',
	},
	removeIcon: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	cameraIcon: {},
	image: {
		width: 40,
		height: 40,
		borderRadius: 4,
	},
})
