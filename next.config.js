/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["tmdb.org", "assets.coingecko.com"],
    },
};

module.exports = nextConfig;
