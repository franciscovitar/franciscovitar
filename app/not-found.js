import Link from "next/link";
import { headers } from "next/headers";
import styles from "./not-found.module.scss";

const content = {
  es: {
    label: "Página no encontrada",
    title: "Este camino no lleva a ningún proyecto.",
    description: "La dirección puede haber cambiado o el enlace ya no existe.",
    home: "Volver al portfolio",
  },
  en: {
    label: "Page not found",
    title: "This path doesn't lead to a project.",
    description: "The address may have changed or the link may no longer exist.",
    home: "Back to portfolio",
  },
};

export default async function NotFound() {
  const lang = (await headers()).get("x-site-lang") === "es" ? "es" : "en";
  const c = content[lang];
  const home = lang === "es" ? "/?lang=es" : "/";

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href={home} className={styles.wordmark}>Francisco Vitar</Link>
        <span className={styles.meta}>404 / {c.label}</span>
      </header>
      <div className={styles.content}>
        <p className={styles.index}>ERROR · 404</p>
        <h1>{c.title}</h1>
        <p>{c.description}</p>
        <Link href={home} className={styles.button}>← {c.home}</Link>
      </div>
    </main>
  );
}
