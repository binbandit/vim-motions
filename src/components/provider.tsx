'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        forcedTheme: 'dark',
        defaultTheme: 'dark',
        enableSystem: false,
        hotKey: false,
      }}
      search={{
        SearchDialog,
        options: {
          links: [
            ['All motions', '/docs/motions/all'],
            ['Basic Motions', '/docs/motions/basic'],
            ['Text Objects', '/docs/motions/text-objects'],
            ['Cheatsheet', '/docs/cheatsheet'],
          ],
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
