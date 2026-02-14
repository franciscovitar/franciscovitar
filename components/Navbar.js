"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import styles from "./Navbar.module.scss";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" }, // <- si querés que aparezca, descomentá
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        const sections = navLinks.map((link) => link.href.substring(1));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto + cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.container}>
          <motion.div
            className={styles.brand}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={closeMenu}>
              <span className={styles.brandText}>FV</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <a
                  href={link.href}
                  className={
                    activeSection === link.href.substring(1)
                      ? styles.active
                      : ""
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.menuButton}
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              className={styles.mobileNav}
              initial={{ opacity: 0, scale: 0.98, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <ul className={styles.mobileNavLinks}>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className={
                        activeSection === link.href.substring(1)
                          ? styles.active
                          : ""
                      }
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
