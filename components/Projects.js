"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiExternalLink, HiEye } from "react-icons/hi";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import styles from "./Projects.module.scss";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.2, delayChildren: 0.1 },
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
    <section className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.subtitle}>
            Premium websites built to convert visitors into clients, with modern
            UX and a mobile-first approach.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
              }`}
              variants={itemVariants}
              whileHover={reduceMotion ? undefined : { y: -10, scale: 1.02 }}
              transition={reduceMotion ? undefined : { duration: 0.3 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.gradientBg} />
                    <span className={styles.projectIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {project.featured && (
                    <div className={styles.featuredBadge}>
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span className={styles.category}>{project.category}</span>
                    {/* <div className={styles.techStack}>
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className={styles.tech}>
                          {tech}
                        </span>
                      ))}
                    </div> */}
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  {/* optional: “outcome/result” line to differentiate projects */}
                  {project.result && (
                    <p className={styles.projectResult}>{project.result}</p>
                  )}

                  <p className={styles.projectDescription}>
                    {project.shortDescription}
                  </p>

                  <div className={styles.deliverables}>
                    <span className={styles.deliverablesLabel}>
                      Key Deliverables:
                    </span>
                    <ul className={styles.deliverablesList}>
                      {project.deliverables.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.projectActions}>
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveButton}
                      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                      aria-label={`Open live site for ${project.title}`}
                    >
                      <HiExternalLink />
                      Live Site
                    </motion.a>

                    <motion.button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className={styles.detailsButton}
                      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                      aria-label={`Open case details for ${project.title}`}
                    >
                      <HiEye />
                      Case Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.viewAll}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.3 }}
        >
          <p className={styles.viewAllText}>
            Want to see more projects or discuss a custom solution?
          </p>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=franvitar15@gmail.com"
            className={styles.contactButton}
            whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
