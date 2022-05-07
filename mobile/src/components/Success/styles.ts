import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		marginTop: 42,
		marginBottom: 10,
		width: 36,
		height: 36,
	},
	title: {
		color: theme.colors.text_primary,
		fontFamily: theme.fonts.medium,
		fontSize: 20,
		marginBottom: 24,
	},
	button: {
		backgroundColor: theme.colors.surface_secondary,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 24,
		borderRadius: 4,
		marginBottom: 56,
	},
	label: {
		color: theme.colors.text_primary,
		fontSize: 14,
		fontFamily: theme.fonts.medium,
	},
})
