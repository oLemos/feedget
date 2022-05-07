import { MailAdapter } from '../adapters/mailAdapter';
import { FeedbacksRepository } from '../repositories/feedbacksRepository';

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (!type) {
            throw new Error('Type must be provided');
        }

        if (!comment) {
            throw new Error('Comment must be provided');
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.');
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        });

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário do feedback: ${comment}</p>`,
                `<img src="${screenshot}" />`,
                `</div>`,
            ].join('\n'),
        });
    }
}
