import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './root.css';
import { Nav } from '~/components/nav/nav';
import { Footer } from '~/components/footer/footer';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="generator" content="remix.run" />
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col font-noto">
        <Nav />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
