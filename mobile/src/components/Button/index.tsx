import React from 'react';
import {
	Text,
	TouchableOpacity,
	ActivityIndicator,
	TouchableOpacityProps
} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
	isLoading: boolean;
}

export function Button({ isLoading, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			{isLoading ? (
				<ActivityIndicator
					color={theme.colors.text_on_brand_color}
				/>
			) : (
				<Text style={styles.label}>Enviar feedback</Text>
			)}
		</TouchableOpacity>
	);
}