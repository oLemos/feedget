import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.brand,
		height: 40,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
	},
	label: {
		color: theme.colors.text_on_brand_color,
		fontSize: 14,
		fontFamily: theme.fonts.medium,
	},
})
