/** @type {import('next').NextConfig} */
const nextConfig = {
        async redirects() {
          return [
            {
              source: '/auth/login',
              destination: '/auth/login',
              permanent: true,
            },
          ]
        },
      };

export default nextConfig;
