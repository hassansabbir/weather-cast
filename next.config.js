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
<<<<<<< HEAD
        hostname: "tile.openweathermap.org", 
=======
        hostname: "i.ibb.co",
>>>>>>> aab609ba918745c3236636e9f7f42f516abfe4ff
      },
    ],
  },
};

module.exports = nextConfig;
