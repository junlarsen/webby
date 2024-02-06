import withMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["tsx", "mdx"],
  images: {
    unoptimized: true,
  },
};

export default withMdx()(nextConfig);
