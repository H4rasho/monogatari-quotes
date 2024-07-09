/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.myanimelist.net",
      "hrbanmlztyltfitohkeo.supabase.co",
      "monogatari-quotes.vercel.app",
    ],
  },
};

module.exports = nextConfig;
