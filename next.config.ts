import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Required for Cloudflare Workers/Pages with @cloudflare/next-on-pages
  // output: 'export',  // Uncomment ONLY if deploying as pure static (no API routes)

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

