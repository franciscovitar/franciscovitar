import styles from "./cv.module.scss";

export const metadata = {
  title: "Resume",
  description:
    "Francisco Vitar — Software Engineer / Full-Stack Product Engineer resume.",
};

export default function CVPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p>Resume · ATS-friendly PDF</p>
        <h1>Francisco Vitar</h1>
        <h2>Software Engineer · Full-Stack Product Engineer</h2>
        <p className={styles.copy}>
          One-page text-native resume covering current engineering work,
          selected projects, UTN academic evidence and core technical skills.
        </p>
        <div className={styles.actions}>
          <a href="/Francisco_Vitar_CV_ATS_V1.pdf">Open PDF</a>
          <a href="/Francisco_Vitar_CV_ATS_V1.pdf" download>
            Download
          </a>
          <a href="/">Back to portfolio</a>
        </div>
      </div>
    </main>
  );
}
