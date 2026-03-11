import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'admin';

export async function POST(req: Request) {
    const { username, password, rememberMe } = await req.json();

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const session = await getSession(!!rememberMe);
    session.isLoggedIn = true;
    session.username = username;
    await session.save();

    return NextResponse.json({ success: true });
}
