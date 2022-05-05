import { SubmitFeedbackUseCase } from './submitFeedbackUseCase';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Submit feedback', () => {
    const submitFeedback = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy },
        { sendMail: sendMailSpy }
    );

    it('should be able to submit a feeback', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'example comment',
                screenshot: 'data:image/png;base64:test.jpg',
            })
        ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feeback without a type', async () => {
        await expect(
            submitFeedback.execute({
                type: '',
                comment: 'example comment',
                screenshot: 'data:image/png;base64:test.jpg',
            })
        ).rejects.toThrow();
    });

    it('should not be able to submit a feeback without a comment', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: '',
                screenshot: 'data:image/png;base64:test.jpg',
            })
        ).rejects.toThrow();
    });

    it('should not be able to submit a feeback with an invalid screenshot format', async () => {
        await expect(
            submitFeedback.execute({
                type: 'BUG',
                comment: 'example comment',
                screenshot: 'test.jpg',
            })
        ).rejects.toThrow();
    });
});
