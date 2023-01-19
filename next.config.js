/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    // register: true,
    // skipWaiting: true,
    // runtimeCaching,
    // buildExcludes: [/middleware-manifest.json$/],
    // disable: process.env.NODE_ENV === 'development'
});



const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  env: {
    REACT_APP_API_URL: 'https://payforeign-api-production.up.railway.app/api/v1/users/',
    NEXT_APP_API_URL: 'https://payforeign.vercel.app/api',
    REACT_APP_CURRENCY_API: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'
  }
});

module.exports = nextConfig;