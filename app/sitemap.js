export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://franciscovitar.vercel.app";

  const paths = [
    "",
    "/cv",
    "/work/vida-2",
    "/work/football-intelligence",
    "/work/personal-ai-system",
    "/work/la-mediterranea-store",
  ];

  return paths.map((path, index) => ({
    url: baseUrl + path,
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "quarterly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
