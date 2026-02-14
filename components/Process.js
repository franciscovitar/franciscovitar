"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  HiMagnifyingGlass,
  HiPaintBrush,
  HiCodeBracket,
  HiRocketLaunch,
} from "react-icons/hi2";
import styles from "./Process.module.scss";

/** ✅ Job-hunting oriented copy (engineering + ownership) */
const processSteps = [
  {
    icon: HiMagnifyingGlass,
    title: "Discover",
    description:
      "I clarify the problem, define constraints, and align on what success looks like before writing code.",
    details: [
      "Problem framing",
      "Requirements & constraints",
      "User / business context",
      "Plan & scope",
    ],
  },
  {
    icon: HiPaintBrush,
    title: "Design",
    description:
      "I shape the solution with a clean structure, solid UX, and clear implementation tradeoffs.",
    details: [
      "System & UI architecture",
      "Wireframes / components",
      "Tradeoffs & edge cases",
      "Implementation plan",
    ],
  },
  {
    icon: HiCodeBracket,
    title: "Build",
    description:
      "I build with quality in mind: maintainable code, testing, performance, and accessibility.",
    details: [
      "Implementation",
      "Testing & QA",
      "Performance & accessibility",
      "Docs & maintainability",
    ],
  },
  {
    icon: HiRocketLaunch,
    title: "Launch",
    description:
      "I ship, monitor, and iterate—so the work keeps improving after the first release.",
    details: [
      "Deployment",
      "Monitoring",
      "Iteration & fixes",
      "Handoff / docs",
    ],
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: (i) => ({
      scaleY: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 1, ease: "easeInOut", delay: i * 0.2 },
    }),
  };

  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <h2 className={styles.title}>My Process</h2>
          <p className={styles.subtitle}>
            A 4-step workflow I use to ship production-ready work: clarify the
            problem, design the solution, build with quality, and iterate with
            feedback.
          </p>
        </motion.div>

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className={styles.timelineItem}
              variants={itemVariants}
            >
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <motion.div
                  className={styles.stepIcon}
                  whileHover={
                    reduceMotion ? undefined : { scale: 1.1, rotate: 10 }
                  }
                  transition={reduceMotion ? undefined : { duration: 0.2 }}
                >
                  <step.icon />
                </motion.div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>

                  <ul className={styles.stepDetails}>
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: reduceMotion ? 0 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : {
                                duration: 0.35,
                                delay: index * 0.2 + detailIndex * 0.1,
                              }
                        }
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <motion.div
                  className={styles.timelineLine}
                  variants={lineVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.processFooter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }
          }
        >
          <p className={styles.footerText}>
            Open to internships / junior roles — happy to share my work and how
            I approach problems.
          </p>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=franvitar15@gmail.com"
            className={styles.processButton}
            whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          >
            Let’s Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
