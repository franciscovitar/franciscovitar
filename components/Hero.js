"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { HiArrowDown, HiMail, HiEye } from "react-icons/hi";
import { stats } from "../data/projects";
import styles from "./Hero.module.scss";

const MotionLink = motion(Link);

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.2, delayChildren: 0.3 },
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

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.badgeText}>
              Open to full-time opportunities
            </span>
          </motion.div>

          <motion.h1 className={styles.headline} variants={itemVariants}>
            Advanced Systems Engineering Student · Founder @{" "}
            <a
              href="https://genovasite.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gradient}
              aria-label="Visit Genova website"
              title="Visit Genova (genovasite.com)"
            >
              Genova
            </a>
          </motion.h1>

          <motion.p className={styles.subheadline} variants={itemVariants}>
            Full-stack developer shipping fast, maintainable web products with a
            performance-first mindset. Based in Córdoba, Argentina 🇦🇷
          </motion.p>

          <motion.div className={styles.stats} variants={itemVariants}>
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className={styles.statItem}
                whileHover={reduceMotion ? undefined : { scale: 1.05, y: -5 }}
                transition={reduceMotion ? undefined : { duration: 0.2 }}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.actions} variants={itemVariants}>
            <motion.a
              href="#work"
              className={styles.primaryButton}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              <HiEye />
              View My Work
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=franvitar15@gmail.com"
              className={styles.secondaryButton}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              <HiMail />
              Email Me
            </motion.a>

            <motion.a
              href="/CV_FV.pdf"
              download="Francisco_Vitar_CV.pdf"
              className={styles.cvButton}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              title="Download CV"
              aria-label="Download CV"
            >
              CV
            </motion.a>
          </motion.div>
        </motion.div>

        {!reduceMotion && (
          <div className={styles.floatingElements}>
            <motion.div
              className={`${styles.floatingElement} ${styles.element1}`}
              animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
            />
            <motion.div
              className={`${styles.floatingElement} ${styles.element2}`}
              animate={{ y: [20, -20, 20], rotate: [0, -360] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              }}
            />
            <motion.div
              className={`${styles.floatingElement} ${styles.element3}`}
              animate={{ y: [-15, 15, -15], rotate: [0, 180] }}
              transition={{
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              }}
            />
          </div>
        )}
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: reduceMotion ? 0 : [0, 10, 0],
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 0.4, delay: 0.9 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <a href="#work" aria-label="Scroll to work section">
          <HiArrowDown />
        </a>
      </motion.div>
    </section>
  );
}
