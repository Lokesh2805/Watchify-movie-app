/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env:{
      API_KEY : '34bf277ddcca2ac381a20fac79a0bfbf',
    },
    images:{
        remotePatterns:[
          {
            protocol:'https',
            hostname:'image.tmdb.org',
            pathname:'**',
          },
        ],
    },
};

export default nextConfig;
