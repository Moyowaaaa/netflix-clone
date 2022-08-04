/** @type {import('next').NextConfig} */
module.exports = {
api_key:{
  api_key : process.env.NEXT_PUBLIC_API_KEY
},
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  }
}
