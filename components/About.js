"use client";

import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiLocationMarker,
  HiMail,
  HiCode,
} from "react-icons/hi";
import styles from "./About.module.scss";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const highlights = [
    {
      icon: HiAcademicCap,
      title: "Engineering Mindset",
      description:
        "Strong fundamentals from Systems Engineering: systems thinking, problem-solving, and structured reasoning.",
    },
    {
      icon: HiCode,
      title: "Ownership & Shipping",
      description:
        "Founder experience building from 0→1: planning, execution, iteration, and delivering under real constraints.",
    },
    {
      icon: HiMail,
      title: "Product Quality",
      description:
        "I care about performance, maintainability, and clean architecture—so what I build is easy to scale and evolve.",
    },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.location}>
              <HiLocationMarker />
              <span>Córdoba, Argentina (Remote)</span>
            </div>
          </motion.div>

          <div className={styles.mainContent}>
            <motion.div className={styles.textContent} variants={itemVariants}>
              <div className={styles.intro}>
                <p className={styles.leadText}>
                  Advanced Systems Engineering student at UTN and founder of a
                  bootstrapped project (Genova), combining strong fundamentals
                  with real-world shipping and full ownership.
                </p>

                <p className={styles.description}>
                  My engineering background built a solid base in mathematics,
                  probability & statistics, databases, and systems analysis &
                  design. That’s why I don’t just “build websites”—I think in
                  systems, trade-offs, performance, and long-term
                  maintainability.
                </p>

                <p className={styles.description}>
                  Alongside university, I work as a full-stack developer with
                  React and Next.js, and I’m comfortable across the stack—from
                  UI implementation to integrating APIs, data, and deployment. I
                  care about writing clean, reliable code and building products
                  that feel fast and polished.
                </p>

                <p className={styles.description}>
                  Working while studying also taught me discipline and fast
                  learning. When something is new to me, I ramp up quickly,
                  validate assumptions, and deliver with confidence.
                </p>
              </div>

              <div className={styles.education}>
                <h3 className={styles.sectionSubtitle}>
                  Education & Background
                </h3>
                <div className={styles.educationItem}>
                  <div className={styles.educationIcon}>
                    <HiAcademicCap />
                  </div>
                  <div className={styles.educationInfo}>
                    <h4>Systems Engineering</h4>
                    <p>Universidad Tecnológica Nacional (UTN)</p>
                    <span className={styles.year}>Advanced Student</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.highlights} variants={itemVariants}>
              <h3 className={styles.sectionSubtitle}>What I Bring</h3>
              <div className={styles.highlightGrid}>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className={styles.highlightCard}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={styles.highlightIcon}>
                      <highlight.icon />
                    </div>
                    <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                    <p className={styles.highlightDescription}>
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* <motion.div className={styles.callToAction} variants={itemVariants}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Open to Full-Time Roles</h3>
              <p className={styles.ctaDescription}>
                If you’re hiring and think I could be a fit, I’d love to chat.
              </p>
            </div>
            <motion.a
              href="mailto:franvitar15@gmail.com"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail />
              Email Me
            </motion.a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
