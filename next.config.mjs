import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true, //URLの末尾にスラッシュを付与
  reactStrictMode: true, // Reactの厳密モードを有効化
  //MicroCMSの画像の制限設定
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};
export default withNextIntl(nextConfig);
//export default nextConfig;
