export const appName = 'Vim Motions';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'binbandit',
  repo: 'vim-motions',
  branch: 'main',
};

/** basePath used on GitHub Pages (empty in local dev). */
export const basePath =
  process.env.NODE_ENV === 'production' ? `/${gitConfig.repo}` : '';
