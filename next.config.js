/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/category",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
