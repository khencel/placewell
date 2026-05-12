"use client"
import React, { useEffect, useRef } from "react";
import styles from "@/styles/facebook.module.css";

const features = [
  "500,000+ Facebook Followers",
  "High-Volume Applicant Reach",
  "Thorough Candidate Screening",
  "Pre-Qualified Talent Pool",
  "Fast Client Endorsement",
];

interface FloatingIconProps {
  emoji: string;
  className: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ emoji, className }) => (
  <div className={`${styles.floatingIcon} ${className}`}>{emoji}</div>
);

const FacebookMarketing: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    
    <div className={styles.wrapper}>
      <div className={styles.card} ref={cardRef}>
        <div className={styles.glow} />

        <div className={styles.illustration}>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <span className={styles.fLogo}>f</span>
            </div>
          </div>
          <div className={styles.megaphone}>📣</div>
          <FloatingIcon emoji="👍" className={styles.iconThumb} />
          <FloatingIcon emoji="❤️" className={styles.iconHeart} />
          <FloatingIcon emoji="👤" className={styles.iconUser} />
          <FloatingIcon emoji="💬" className={styles.iconChat} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Facebook Marketing</h2>
          <div className={styles.divider} />
              <p className={styles.description}>
                With nearly 500,000 Facebook followers, we generate hundreds of qualified applicants from a single post. Our dedicated manpower support team thoroughly screens every candidate before presenting them to clients — saving you time and ensuring only the best reach your interview table.
              </p>
          </div>

        <ul className={styles.features}>
          {features.map((feature, i) => (
            <li
              key={feature}
              className={styles.featureItem}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className={styles.checkIcon}>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#3b82f6" />
                  <path
                    d="M6 10l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={styles.featureLabel}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacebookMarketing;