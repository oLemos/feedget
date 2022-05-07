import React from 'react';
import {
	View,
	Image,
	Text,
	TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import successImage from '../../assets/success.png'
import { Copyright } from '../Copyright';

interface SuccessProps {
	onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {
	return (
		<View style={styles.container}>
			<Image
				source={successImage}
				style={styles.image}
			/>

			<Text style={styles.title}>
				Agradecemos o feedback
			</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={onSendAnotherFeedback}
			>
				<Text style={styles.label}>
					Quero enviar outro
				</Text>
			</TouchableOpacity>

			<Copyright />
		</View>
	);
}