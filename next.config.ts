import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {bodySizeLimit:'100kb',allowedOrigins:["/"]},
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Accept-CH',
            value: 'Sec-CH-Prefers-Color-Scheme',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
