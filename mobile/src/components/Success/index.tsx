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

export function Success() {
	return (
		<View style={styles.container}>
			<Image
				source={successImage}
				style={styles.image}
			/>

			<Text style={styles.title}>
				Agradecemos o feedback
			</Text>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.label}>
					Quero enviar outro
				</Text>
			</TouchableOpacity>

			<Copyright />
		</View>
	);
}