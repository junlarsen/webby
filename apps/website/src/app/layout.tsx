import clsx from "clsx";
import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jun.codes/"),
  title: "Jun.codes | my personal piece of the internet",
  description:
    "Welcome, this is my personal space on the internet. Oh, and I have a blog.",
  category: "Software Development",
  openGraph: {
    title: "Jun.codes | my personal piece of the internet",
    description:
      "Welcome, this is my personal space on the internet. Oh, and I have a blog.",
    type: "website",
    siteName: "Jun.codes",
    url: "https://jun.codes",
    countryName: "Norway",
    locale: "en-US",
    images: [
      {
        url: "/snapshot.png",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@supergrecko",
    creator: "@supergrecko",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.png",
    other: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
};

const notoSans = Noto_Sans({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={clsx(notoSans.className, notoSerif.className)}
    >
      <body>{children}</body>
    </html>
  );
}
