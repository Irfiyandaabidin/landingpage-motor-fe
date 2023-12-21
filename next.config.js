/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io']
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  }
}

module.exports = nextConfig
