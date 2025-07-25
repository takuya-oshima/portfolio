import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true, //URLの末尾にスラッシュを付与
  reactStrictMode: true, //Reactの厳密モードを有効化
  //MicroCMSの画像の制限設定
  images: {
    formats: ['image/webp'], //WebP優先
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  experimental: {
    optimizeCss: true, //CSS最適化（Vercel環境で有効）
  },
  compiler: {
    styledComponents: true, // styled-components 使用時のみ
  },
};
export default withNextIntl(nextConfig);
//export default nextConfig;
