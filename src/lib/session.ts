import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export interface AdminSession {
    isLoggedIn: boolean;
    username?: string;
}

const sessionOptions = {
    password: process.env.SESSION_SECRET ?? 'vmk-admin-secret-key-32-chars-min!!',
    cookieName: 'vmk_admin_session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax' as const,
        maxAge: undefined as number | undefined,
    },
};

export async function getSession(rememberMe = false) {
    const cookieStore = await cookies();
    const opts = {
        ...sessionOptions,
        cookieOptions: {
            ...sessionOptions.cookieOptions,
            maxAge: rememberMe ? 60 * 60 * 24 * 30 : undefined, // 30 days or session
        },
    };
    return getIronSession<AdminSession>(cookieStore, opts);
}
