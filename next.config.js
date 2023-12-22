/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig

images.unoptimized = true
const withImage=require('next-images')
module.exports = withImage()