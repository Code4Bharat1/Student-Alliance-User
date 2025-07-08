/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'res.cloudinary.com',
            'studentalliance.s3.ap-northeast-1.wasabisys.com',
            'localhost',
        ],
    },
};

export default nextConfig;
