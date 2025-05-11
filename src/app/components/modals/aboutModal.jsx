import React from 'react';
import styles from './aboutModal.module.css'; // CSS module

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.modalTitle}>About Me</h2>
        <div className={styles.modalContent}>
          <h1 className={styles.name}>Faizullah Laghari</h1>
          <p className={styles.role}>Frontend Developer</p>

          <p>
            I'm a passionate developer with a deep love for creating interactive, user-friendly web experiences. I started my journey as a self-taught coder and have since built various projects ranging from personal portfolios to business websites.
          </p>

          <p>
            My main tech stack includes <strong>HTML, CSS, JavaScript, React.js, and Next.js</strong>. I also enjoy working with WordPress for CMS-powered sites. I'm continuously exploring new tools and frameworks to stay up to date.
          </p>

          <p>
            Outside of coding, I enjoy sharing knowledge, helping others in the dev community, and learning about UI/UX trends. I believe every line of code contributes to a bigger picture, and I strive to make that picture as meaningful as possible.
          </p>

          <p>
            <strong>Skills:</strong> React, Next.js, Tailwind CSS, WordPress, PHP, Git, REST APIs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
