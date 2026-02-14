"use client";

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink, HiCheck } from "react-icons/hi";
import styles from "./ProjectModal.module.scss";

export default function ProjectModal({ project, onClose }) {
  const overlayVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    }),
    [],
  );

  const modalVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.96, y: 24 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", damping: 26, stiffness: 320 },
      },
      exit: {
        opacity: 0,
        scale: 0.96,
        y: 24,
        transition: { duration: 0.18 },
      },
    }),
    [],
  );

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  // ✅ Gmail compose (más confiable que mailto en desktop)
  const email = "franvitar15@gmail.com";
  const mailSubject = project
    ? `Project inquiry - similar to ${project.title}`
    : "Project inquiry - Portfolio";

  const mailBody = project
    ? `Hi Francisco,\n\nI'm interested in a project similar to "${project.title}".\n\nCould we talk?\n\nThanks!`
    : `Hi Francisco,\n\nI'd like to discuss a new project.\n\nThanks!`;

  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <AnimatePresence mode="wait">
      {project && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          // ✅ Cierra solo si el click fue en el overlay
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            onMouseDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div className={styles.modalHeader}>
              <div className={styles.projectMeta}>
                <span className={styles.category}>{project.category}</span>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured Project</span>
                )}
              </div>

              <motion.button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close modal"
              >
                <HiX />
              </motion.button>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.gradientBg} />
                  <h1 className={styles.projectTitle} id="modal-title">
                    {project.title}
                  </h1>
                </div>
              </div>

              <div className={styles.projectInfo}>
                <div className={styles.description} id="modal-description">
                  <h2 className={styles.sectionTitle}>Project Overview</h2>
                  <p className={styles.fullDescription}>
                    {project.fullDescription}
                  </p>
                </div>

                <div className={styles.deliverables}>
                  <h2 className={styles.sectionTitle}>Key Deliverables</h2>
                  <ul className={styles.deliverablesList}>
                    {project.deliverables.map((item, index) => (
                      <motion.li
                        key={`${item}-${index}`}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className={styles.deliverableItem}
                      >
                        <HiCheck className={styles.checkIcon} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={styles.technologies}>
                  <h2 className={styles.sectionTitle}>Technologies Used</h2>
                  <div className={styles.techGrid}>
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={`${tech}-${index}`}
                        className={styles.techItem}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className={styles.actions}>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveButton}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiExternalLink />
                    Visit Live Site
                  </motion.a>

                  <motion.a
                    href={gmailComposeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inquireButton}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Similar Project
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
