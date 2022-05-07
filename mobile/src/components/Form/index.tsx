import React from 'react';
import {
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

import { theme } from '../../theme';
import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { Button } from '../Button';
import { FeedbackType } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';

interface FormProps {
	feedbackType: FeedbackType
}

export function Form({ feedbackType }: FormProps) {
	const feedbackTypeInfo = feedbackTypes[feedbackType]

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity>
					<ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
				</TouchableOpacity>

				<View style={styles.titleContainer}>
					<Image
						source={feedbackTypeInfo.image}
						style={styles.image}
					/>

					<Text style={styles.titleText}>
						{feedbackTypeInfo.title}
					</Text>
				</View>
			</View>

			<TextInput
				multiline
				style={styles.input}
				placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
				placeholderTextColor={theme.colors.text_secondary}
			/>

			<View style={styles.footer}>
				<ScreenshotButton
					onRemoveShot={() => { }}
					onTakeShot={() => { }}
					screenshot="https://github.com/oLemos.png"
				/>

				<Button isLoading={false} />
			</View>
		</View>
	);
}