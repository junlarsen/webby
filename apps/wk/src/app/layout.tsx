import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans as NotoSans, Noto_Sans_JP as NotoSansJp } from 'next/font/google';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { QueryProvider } from '@/app/query-provider';
import { RecoilProvider } from '@/app/recoil-provider';

const notoSans = NotoSans({ weight: ['300', '400', '600', '700'], subsets: ['latin'] });
const notoSansJp = NotoSansJp({ weight: ['300', '400', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'wk.jun.codes',
  description: 'Anki-style flashcards for your WaniKani reviews',
};

export default function RootLayout({ children }: PropsWithChildren) {
  const classes = clsx(notoSans.className, notoSansJp.className, 'max-w-4xl mx-auto');
  return (
    <html lang="en">
      <RecoilProvider>
        <QueryProvider>
          <body className={classes}>{children}</body>
        </QueryProvider>
      </RecoilProvider>
    </html>
  );
}
