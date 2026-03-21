import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { SMTP_SETTINGS } from '@/lib/smtpSettings';

export type SendContactEmailArgs = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

function getPort(value: string): number | null {
    const n = Number.parseInt(value, 10);
    return Number.isFinite(n) && n > 0 ? n : null;
}

function hasSmtpConfigured(): boolean {
    const { host, port, user, pass, from } = SMTP_SETTINGS;
    return Boolean(host && port && user && pass && from);
}

function getTransporter(): Transporter {
    const port = getPort(SMTP_SETTINGS.port) ?? 587;
    return nodemailer.createTransport({
        host: SMTP_SETTINGS.host,
        port,
        secure: port === 465,
        auth: {
            user: SMTP_SETTINGS.user,
            pass: SMTP_SETTINGS.pass,
        },
    });
}

export async function sendContactNotificationEmail(args: SendContactEmailArgs): Promise<void> {
    if (!hasSmtpConfigured()) {
        throw new Error('SMTP is not configured');
    }

    const transporter = getTransporter();

    const subject = `New website enquiry from ${args.name}`.slice(0, 200);
    const text = [
        `Name: ${args.name}`,
        `Email: ${args.email}`,
        `Phone: ${args.phone}`,
        '',
        args.message,
    ].join('\n');

    await transporter.sendMail({
        from: SMTP_SETTINGS.from,
        to: process.env.CONTACT_TO_EMAIL ?? SMTP_SETTINGS.from,
        replyTo: args.email,
        subject,
        text,
    });
}

