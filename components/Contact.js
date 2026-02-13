"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiExternalLink, HiCheck } from "react-icons/hi";
import { SiLinkedin, SiGithub, SiGooglechrome } from "react-icons/si";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.company ? `Company: ${formData.company}` : null,
      "",
      "Message:",
      formData.message,
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailtoLink = `mailto:franvitar15@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: "Genova",
      icon: SiGooglechrome,
      href: "https://genovasite.com",
      label: "genovasite.com",
      color: "cyan",
    },
    {
      name: "Email",
      icon: HiMail,
      href: "mailto:franvitar15@gmail.com",
      label: "franvitar15@gmail.com",
      color: "blue",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/franciscovitar/",
      label: "LinkedIn Profile",
      color: "blue",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      href: "https://github.com/franciscovitar",
      label: "GitHub Profile",
      color: "purple",
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

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>Let's Work Together</h2>
            <p className={styles.subtitle}>
              Ready to create a premium web presence that drives results?
              Let&apos;s discuss your project and bring your vision to life.
            </p>
          </motion.div>

          <div className={styles.contactContent}>
            <motion.div className={styles.contactInfo} variants={itemVariants}>
              <h3 className={styles.infoTitle}>Get in Touch</h3>
              <p className={styles.infoDescription}>
                Open to roles and freelance work—happy to connect.{" "}
              </p>

              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => {
                  const isMail = link.href.startsWith("mailto:");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target={isMail ? "_self" : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      className={`${styles.socialLink} ${styles[link.color]}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={styles.socialIcon}>
                        <link.icon />
                      </div>
                      <div className={styles.socialInfo}>
                        <span className={styles.socialName}>{link.name}</span>
                        <span className={styles.socialLabel}>{link.label}</span>
                      </div>
                      {!isMail && (
                        <HiExternalLink className={styles.externalIcon} />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div className={styles.contactForm} variants={itemVariants}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Send a Message</h3>

                  {isSubmitted && (
                    <motion.div
                      className={`${styles.submitStatus} ${styles.success}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      aria-live="polite"
                    >
                      <HiCheck />
                      <span>Email draft opened!</span>
                    </motion.div>
                  )}
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      className={styles.input}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      className={styles.input}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      autoComplete="organization"
                      className={styles.input}
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={styles.textarea}
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  <HiMail />
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
