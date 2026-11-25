export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://franvitar.genovasite.com"
).replace(/\/+$/, "");

export function localizedUrl(path, lang = "en") {
  const url = new URL(path, `${siteUrl}/`);
  if (lang === "es") url.searchParams.set("lang", "es");
  return url.toString();
}

export function localizedAlternates(path, lang = "en") {
  return {
    canonical: localizedUrl(path, lang),
    languages: {
      "en-US": localizedUrl(path, "en"),
      "es-AR": localizedUrl(path, "es"),
    },
  };
}
