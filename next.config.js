/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
