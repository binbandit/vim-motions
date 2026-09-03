import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import { VimLogo } from '@/components/vim-logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <VimLogo />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: 'Reference',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Cheatsheet',
        url: '/docs/cheatsheet',
        active: 'url',
      },
    ],
    themeSwitch: {
      enabled: false,
    },
  };
}

export { appName } from './shared';
