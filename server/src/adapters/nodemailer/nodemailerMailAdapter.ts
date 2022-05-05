import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../mailAdapter';

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '21e5e70e746c02',
        pass: 'c61c8258928faf',
    },
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel Lemos <galemos25@gmail.com>',
            subject: subject,
            html: body,
        });
    }
}
