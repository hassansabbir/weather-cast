/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
      },
      {
        protocol: "https",
        hostname: "tile.openweathermap.org", 
      },
    ],
  },
};

module.exports = nextConfig;
