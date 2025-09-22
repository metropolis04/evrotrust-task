import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
  async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin',
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN',
              },
              {
                key : 'Strict-Transport-Security',
                value : 'max-age=63072000; includeSubDomains; preload'
              }
            ],
          },
        ]
      },

};

export default nextConfig;
