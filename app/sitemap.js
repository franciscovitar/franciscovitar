import { localizedUrl } from "../lib/site-metadata";

export default function sitemap() {
  const paths = [
    "",
    "/cv",
    "/genova",
    "/work/vida-2",
    "/work/library-network-api",
    "/work/webhook-recovery-lab",
    "/work/personal-ai-system",
    "/work/cauce-commerce-lab",
  ];

  return paths.flatMap((path, index) => [
    {
      url: localizedUrl(path, "en"),
      lastModified: new Date(),
      changeFrequency: path === "" ? "monthly" : "quarterly",
      priority: index === 0 ? 1 : 0.8,
      alternates: {
        languages: {
          "en-US": localizedUrl(path, "en"),
          "es-AR": localizedUrl(path, "es"),
        },
      },
    },
    {
      url: localizedUrl(path, "es"),
      lastModified: new Date(),
      changeFrequency: path === "" ? "monthly" : "quarterly",
      priority: index === 0 ? 1 : 0.8,
      alternates: {
        languages: {
          "en-US": localizedUrl(path, "en"),
          "es-AR": localizedUrl(path, "es"),
        },
      },
    },
  ]);
}
