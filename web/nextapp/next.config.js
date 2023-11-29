/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "app.advansoftware.shop",
        port: "8096",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
