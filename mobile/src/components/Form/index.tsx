import React, { useState } from 'react';
import {
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot'
import * as FileSystem from 'expo-file-system'

import { theme } from '../../theme';
import { styles } from './styles';

import { api } from '../../services/api';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { Button } from '../Button';
import { FeedbackType } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';

interface FormProps {
	feedbackType: FeedbackType
	onFeedbackCanceled: () => void;
	onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps) {
	const [isSendingFeedback, setIsSendingFeedback] = useState(false)
	const [screenshot, setScreenshot] = useState<string | null>(null)
	const [comment, setComment] = useState<string>('')

	const feedbackTypeInfo = feedbackTypes[feedbackType]

	function handleScreenshot() {
		captureScreen({
			format: 'jpg',
			quality: 0.8
		})
			.then(uri => setScreenshot(uri))
			.catch(error => console.log(error))
	}

	function handleScreenshotRemove() {
		setScreenshot(null);
	}

	async function handleSendFeedback() {
		if (isSendingFeedback) {
			return
		}

		setIsSendingFeedback(true)

		const screenshotConverted = screenshot && await FileSystem.readAsStringAsync(
			screenshot, { encoding: 'base64' }
		)

		try {
			const body = {
				type: feedbackType,
				screenshot: `data:image/png;base64, ${screenshotConverted}`,
				comment
			}

			await api.post('/feedbacks', body)

			onFeedbackSent()
			setIsSendingFeedback(false)
		} catch (error) {
			console.log(error)
			setIsSendingFeedback(false)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={onFeedbackCanceled}>
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
				autoCorrect={false}
				onChangeText={setComment}
			/>

			<View style={styles.footer}>
				<ScreenshotButton
					onRemoveShot={handleScreenshotRemove}
					onTakeShot={handleScreenshot}
					screenshot={screenshot}
				/>

				<Button
					onPress={handleSendFeedback}
					isLoading={isSendingFeedback}
				/>
			</View>
		</View>
	);
}