import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP as NotoSansJp, Noto_Sans as NotoSans } from 'next/font/google';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Nav } from '@/components/nav/nav';
import { Footer } from '@/components/footer/footer';
import { Section } from '@/components/section/section';

const notoSans = NotoSans({ weight: ['300', '400', '600', '700'], subsets: ['latin'] });
const notoSansJp = NotoSansJp({ weight: ['300', '400', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crusty Corner',
  description: 'My personal piece of the internet <3',
};

export default function RootLayout({ children }: PropsWithChildren) {
  const classes = clsx('min-h-screen flex flex-col', notoSans.className, notoSansJp.className);
  return (
    <html lang="en">
      <head></head>
      <body className={classes}>
        <Nav />
          <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
