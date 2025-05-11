'use client';
import React, { useState } from 'react';
import AboutModal from './modals/aboutModal';

function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="section about">
      <div className="img-wrapper">
        <div className="img-box about-img">
          <img src="images/about-image.png" alt="" />
        </div>
      </div>

      <div className="about-info">
        <h2 className="title">About Me</h2>
        <h3>Frontend Developer!</h3>
        <p className="desc">
          My name is Faizullah, and I’ve always been fascinated by how technology shapes our world. Starting as a self-taught developer, I turned my passion for coding into a career where I get to create impactful web solutions. Whether it’s a sleek portfolio for an artist or a robust e-commerce platform, I believe every project tells a story, and I’m here to make yours unforgettable.
        </p>
        <button className="btn" onClick={openModal}>View More</button>
      </div>

      <AboutModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default AboutPage;
