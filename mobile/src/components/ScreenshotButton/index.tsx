import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenshotButtonProps {
	sreenshot: string | null;
	onTakeShot: () => void;
	onRemoveShot: () => void;
}

export function ScreenshotButton({ sreenshot, onTakeShot, onRemoveShot }: ScreenshotButtonProps) {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={sreenshot ? onRemoveShot : onTakeShot}
		>
			{sreenshot ? (
				<Trash
					size={22}
					color={theme.colors.text_secondary}
					weight="fill"
					style={styles.removeIcon}
				/>
			) : (
				<Camera
					size={22}
					color={theme.colors.text_primary}
					weight="bold"
					style={styles.cameraIcon}
				/>
			)}
		</TouchableOpacity>
	);
}