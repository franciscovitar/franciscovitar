"use client";

import { motion } from "framer-motion";
import { HiMail, HiArrowLeft, HiDownload } from "react-icons/hi";
import Link from "next/link";

export default function CVClient() {
  const email = "franvitar15@gmail.com";
  const subject = "CV Request - Francisco Vitar";
  const body = `Hi Francisco,

I would like to request your CV and learn more about your experience and availability.

Thank you!`;

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <main className="cv-page">
      <div className="container">
        <motion.div
          className="cv-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="back-link"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href="/" className="back-button">
              <HiArrowLeft />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            className="cv-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="cv-icon">
              <HiDownload />
            </div>
            <h1 className="cv-title">Download My CV</h1>
            <p className="cv-subtitle">
              Get a detailed overview of my experience, skills, and projects
            </p>
          </motion.div>

          <motion.div
            className="cv-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="info-card">
              <h2>About the CV</h2>
              <p>
                My CV includes detailed information about my education at
                Universidad Tecnológica Nacional (UTN), professional experience
                as Founder @ Genova, technical skills in modern web development,
                and a portfolio of successful client projects.
              </p>

              <div className="cv-highlights">
                <div className="highlight-item">
                  <h3>Technical Expertise</h3>
                  <p>
                    React, Next.js, JavaScript, SCSS, Python, and modern
                    development tools
                  </p>
                </div>
                <div className="highlight-item">
                  <h3>Project Experience</h3>
                  <p>
                    5+ premium websites delivered with focus on conversion and
                    performance
                  </p>
                </div>
                <div className="highlight-item">
                  <h3>Educational Background</h3>
                  <p>4th-year Systems Engineering student at UTN</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3>Request CV via Email</h3>
              <p>
                For the most up-to-date version of my CV and to start a
                conversation about potential opportunities, please send me an
                email.
              </p>

              <motion.a
                href={mailtoHref}
                className="email-button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail />
                Request CV via Email
              </motion.a>

              <div className="contact-info">
                <span>{email}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="additional-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              By requesting my CV, you'll also receive information about my
              current availability, project rates, and how we can work together
              to create something amazing.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .cv-page {
          min-height: 100vh;
          padding: 6rem 0 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .cv-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .back-link {
          align-self: flex-start;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.25s ease;
        }

        .back-button:hover {
          color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .cv-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .cv-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            var(--accent-cyan),
            var(--accent-purple)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--background-primary);
          font-size: 1.5rem;
        }

        .cv-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          background: linear-gradient(
            135deg,
            var(--accent-cyan),
            var(--accent-purple)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .cv-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 500px;
          line-height: 1.6;
          margin: 0;
        }

        .cv-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .info-card,
        .contact-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }

        .info-card h2,
        .contact-card h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .info-card p,
        .contact-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .cv-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .highlight-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
        }

        .highlight-item h3 {
          color: var(--accent-cyan);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .highlight-item p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin: 0;
        }

        .email-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(
            135deg,
            var(--accent-cyan),
            var(--accent-blue)
          );
          color: var(--background-primary);
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-family: var(--font-sora);
          box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
          transition: box-shadow 0.25s ease;
          width: 100%;
          max-width: 280px;
          cursor: pointer;
        }

        .email-button:hover {
          box-shadow:
            0 0 25px rgba(100, 255, 218, 0.4),
            0 20px 25px rgba(0, 0, 0, 0.35);
        }

        .contact-info {
          text-align: center;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-info span {
          color: var(--accent-cyan);
          font-family: monospace;
          font-size: 0.9rem;
        }

        .additional-info {
          text-align: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .additional-info p {
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .cv-page {
            padding: 4rem 0 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .cv-highlights {
            grid-template-columns: 1fr;
          }

          .cv-content {
            gap: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
