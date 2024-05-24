/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'poultrykeeper.com',
            },
        ],
    },
};

export default nextConfig;
