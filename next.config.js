/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  env: {
    REACT_APP_API_URL: 'http://localhost:8080/api/v1/users/',
    NEXT_APP_API_URL: 'http://localhost:3000/api',
    REACT_APP_CURRENCY_API: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'
  }
}

module.exports = nextConfig