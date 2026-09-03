import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const repo = 'vim-motions';
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages project site: https://binbandit.github.io/vim-motions/
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : undefined,
};

export default withMDX(config);
