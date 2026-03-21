export type SmtpSettings = {
    host: string;
    port: string;
    user: string;
    pass: string;
    from: string;
};

export const SMTP_SETTINGS: SmtpSettings = {
    host: '',
    port: '587',
    user: '',
    pass: '',
    from: '',
};

