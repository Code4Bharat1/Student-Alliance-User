/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "robodo.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.3dbazaar.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rees52.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.rees52.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.edusquadz.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "studentalliance.s3.ap-northeast-1.wasabisys.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://api-studentalliance.nexcorealliance.com/api/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
