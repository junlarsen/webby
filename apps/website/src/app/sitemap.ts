import { MetadataRoute } from "next";

type Sitemap = MetadataRoute.Sitemap;

export default function sitemap(): Sitemap {
  return [
    {
      url: "https://jun.codes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
