import { JetBrains_Mono, Outfit, Newsreader } from 'next/font/google';
import { Provider } from '@/components/provider';
import { appName } from '@/lib/shared';
import type { Metadata } from 'next';
import './global.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://binbandit.github.io/vim-motions'),
  title: {
    default: `${appName} — Developer Reference`,
    template: `%s · ${appName}`,
  },
  description:
    'A dark, searchable reference for every Vim motion, operator, and text object — built for developers learning and working in Vim.',
  openGraph: {
    title: appName,
    description:
      'Searchable Vim motions reference with examples, operators, and text objects.',
    type: 'website',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${jetbrains.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
