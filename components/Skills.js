"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiSass,
  SiGit,
  SiGithub,
  SiPython,
  SiFramer,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiWordpress,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { HiCode, HiServer, HiSparkles, HiAcademicCap } from "react-icons/hi";
import { HiGlobeAlt } from "react-icons/hi2"; // APIs
import { BsStars } from "react-icons/bs"; // AI / Copilot

import styles from "./Skills.module.scss";

export default function Skills() {
  const skillCategories = [
    {
      icon: HiCode,
      title: "Frontend Development",
      color: "cyan",
      skills: [
        { name: "React", icon: SiReact, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "JavaScript", icon: SiJavascript, level: 88 },
        { name: "HTML5", icon: SiHtml5, level: 95 },
        { name: "SCSS", icon: SiSass, level: 90 },
      ],
    },
    {
      icon: HiServer,
      title: "Backend, APIs & Databases",
      color: "purple",
      skills: [
        { name: "Java", icon: FaJava, level: 78 },
        { name: "Python", icon: SiPython, level: 75 },
        { name: "APIs (REST)", icon: HiGlobeAlt, level: 80 },
        { name: "SQL (MySQL)", icon: SiMysql, level: 80 },
        { name: "SQL (PostgreSQL)", icon: SiPostgresql, level: 78 },
      ],
    },
    {
      icon: HiSparkles,
      title: "Tools, Platforms & AI",
      color: "pink",
      skills: [
        { name: "Git", icon: SiGit, level: 85 },
        { name: "GitHub", icon: SiGithub, level: 88 },
        { name: "Linux", icon: SiLinux, level: 75 },
        { name: "WordPress", icon: SiWordpress, level: 78 },
        { name: "AI / Copilot Workflows", icon: BsStars, level: 85 },
        { name: "Framer Motion", icon: SiFramer, level: 80 },
      ],
    },
    {
      icon: HiAcademicCap,
      title: "Engineering Foundations",
      color: "cyan",
      skills: [
        { name: "Mathematics & Algebra", icon: HiAcademicCap, level: 85 },
        { name: "Probability & Statistics", icon: HiAcademicCap, level: 82 },
        { name: "OOP & Design Principles", icon: HiAcademicCap, level: 84 },
        { name: "Systems Analysis & Design", icon: HiAcademicCap, level: 83 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            A modern stack focused on performance, user experience, and
            maintainable code—built on strong engineering fundamentals.
          </p>
        </motion.div>

        <motion.div
          className={styles.categoriesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className={`${styles.categoryCard} ${styles[category.color]}`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <category.icon />
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    variants={skillVariants}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIcon}>
                        <skill.icon />
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                      {/* ✅ sin % (más “serio” para hiring) */}
                    </div>

                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.additionalInfo}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Continuous Learning</h3>
            <p className={styles.infoDescription}>
              As a 4th-year Systems Engineering student, I continuously sharpen
              both my technical stack and my engineering mindset—learning fast
              and adapting quickly to new technologies and requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
