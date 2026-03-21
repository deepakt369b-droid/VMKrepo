"use client";

import React from 'react';
import Link from 'next/link';

export default function AdminResetPasswordPage() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="w-full max-w-lg bg-neutral-950/80 border border-white/10 rounded-2xl p-8">
                <h1 className="text-2xl font-serif font-bold mb-2">Reset Password</h1>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    This admin panel is currently configured to use environment variables for authentication
                    (<code className="px-1 py-0.5 bg-white/5 border border-white/10 rounded">ADMIN_USERNAME</code> /{' '}
                    <code className="px-1 py-0.5 bg-white/5 border border-white/10 rounded">ADMIN_PASSWORD</code>).
                    Password reset emails are not enabled for admin accounts yet.
                </p>

                <div className="mt-6 space-y-3 text-sm text-neutral-400">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        To change the admin password, update the deployment environment variable{' '}
                        <code className="px-1 py-0.5 bg-black/40 border border-white/10 rounded">ADMIN_PASSWORD</code>{' '}
                        and redeploy/restart the server.
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                        SMTP settings in <span className="text-neutral-200">Settings → Email / SMTP</span> are used for
                        website enquiry notifications (contact form server notification), not admin password resets.
                    </div>
                </div>

                <div className="mt-8 flex gap-3">
                    <Link
                        href="/admin/login"
                        className="px-5 py-2.5 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-all"
                    >
                        Back to login
                    </Link>
                </div>
            </div>
        </main>
    );
}

