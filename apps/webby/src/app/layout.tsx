import './globals.css';
import 'highlight.js/styles/github.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP as NotoSansJp, Noto_Sans as NotoSans } from 'next/font/google';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Nav } from '@/components/nav/nav';
import { Footer } from '@/components/footer/footer';

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="generator" content="next.js" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <link rel="author" href="https://jun.codes" />
        <link rel="publisher" href="https://jun.codes" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="twitter:dnt" content="on" />
        <meta name="pinterest" content="nopin" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://jun.codes" />
      </head>
      <body className={classes}>
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
