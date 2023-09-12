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
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "www.thenation.com",
      },
      {
        protocol: "https",
        hostname: "www.messynessychic.com",
      },
      {
        protocol: "https",
        hostname: "ia802304.us.archive.org",
      },
      {
        protocol: "https",
        hostname: "go.newspapers.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "wallpapers.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
    ],
  },
};

module.exports = nextConfig;
