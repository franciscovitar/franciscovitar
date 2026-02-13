"use client";

import { motion } from "framer-motion";
import { HiHeart, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { SiNextdotjs, SiReact, SiFramer } from "react-icons/si";
import styles from "./Footer.module.scss";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Email", href: "mailto:franvitar15@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/franciscovitar/" },
    { label: "GitHub", href: "https://github.com/franciscovitar" },
  ];

  // ✅ NUEVO
  const serviceLinks = [
    { label: "Landing Pages", href: "#contact" },
    { label: "Service Websites", href: "#contact" },
    { label: "Full-Stack Apps", href: "#contact" },
    { label: "SEO & Performance", href: "#contact" },
    { label: "WordPress → Next.js", href: "#contact" },
  ];

  const techStack = [
    { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org" },
    { name: "React", icon: SiReact, url: "https://react.dev" },
    {
      name: "Framer Motion",
      icon: SiFramer,
      url: "https://www.framer.com/motion",
    },
  ];

  const email = "franvitar15@gmail.com";
  const subject = "Project inquiry - Portfolio";
  const body = `Hi Francisco,\n\nI'd like to discuss a new project. Can we talk?\n\nThanks!`;
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <motion.div
            className={styles.brandSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.brand}>
              <span className={styles.brandText}>Francisco Vitar</span>
              <span className={styles.brandSubtext}>Full-Stack Developer</span>
            </div>

            <p className={styles.brandDescription}>
              Building premium web experiences that drive results. Based in
              Córdoba, Argentina.
            </p>

            {/* ✅ NUEVO: meta corta */}
            <div className={styles.brandMeta}>
              <span className={styles.metaItem}>
                <HiLocationMarker /> Remote (GMT-3)
              </span>
              <span className={styles.metaItem}>
                <HiClock /> Typical response: under 24h
              </span>
            </div>

            {/* ✅ NUEVO: mini CTA */}
            <motion.a
              href={mailtoHref}
              className={styles.footerCta}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiMail />
              Start a project
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigation</h4>
              <nav className={styles.linkList}>
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                    whileHover={{ x: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* ✅ NUEVO: Services */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Services</h4>
              <nav className={styles.linkList}>
                {serviceLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={styles.link}
                    whileHover={{ x: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <nav className={styles.linkList}>
                {socialLinks.map((link) => {
                  const isMail = link.href.startsWith("mailto:");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target={isMail ? "_self" : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      className={styles.link}
                      whileHover={{ x: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.copyright}>
            <span>
              &copy; {new Date().getFullYear()} Francisco Vitar. Made with{" "}
              <motion.span
                className={styles.heart}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HiHeart />
              </motion.span>{" "}
              in Argentina
            </span>
          </div>

          <div className={styles.techStack}>
            <span className={styles.builtWith}>Built with</span>
            <div className={styles.techIcons}>
              {techStack.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.techIcon}
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.2 }}
                  title={tech.name}
                  aria-label={tech.name}
                >
                  <tech.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
