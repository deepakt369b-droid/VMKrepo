import { NextResponse } from 'next/server';
import { sendContactNotificationEmail } from '@/lib/email';

type ContactPayload = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

function isNonEmptyString(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Partial<ContactPayload>;

        if (
            !isNonEmptyString(body.name) ||
            !isNonEmptyString(body.email) ||
            !isNonEmptyString(body.phone) ||
            !isNonEmptyString(body.message)
        ) {
            return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
        }

        await sendContactNotificationEmail({
            name: body.name.trim(),
            email: body.email.trim(),
            phone: body.phone.trim(),
            message: body.message.trim(),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact email error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}

