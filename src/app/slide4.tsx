import React from 'react';
import {
  FaCheckCircle,
  FaUsers,
  FaBuilding,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import styles from './slide4.module.css';

export default function ExcellenceSlide() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const features = [
    {
      icon: FaCheckCircle,
      title: 'Proven Track Record',
      description: 'A legacy of success built on trust, results, and strong industry partnerships.'
    },
    {
      icon: FaUsers,
      title: 'Massive & Organized Recruitment',
      description: 'Connecting the right talent with the right opportunities, globally.'
    },
    {
      icon: FaBuilding,
      title: 'Modern Facilities',
      description: 'Equipped with advanced technology and a conducive learning environment.'
    },
    {
      icon: FaGraduationCap,
      title: 'In-House Skills & Language Training',
      description: 'Comprehensive training programs designed to develop global professionals.'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Left Content Section */}
      <div className={styles.leftSection}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>🏆</span>
          <span className={styles.badgeText}>COMMITTED TO EXCELLENCE</span>
        </div>

        {/* Main Heading */}
        <div className={styles.headingContainer}>
          <h2 className={styles.mainHeading}>Excellence</h2>
          {/* <h3 className={styles.subHeading}>
            Experience. Modern Facilities. Skilled Workforce
            </h3> */}
          <h1 className={styles.mainHeadingGold}>Providing world class Filipino workers since 1978</h1>
        </div>

        
        <div className={styles.featuresContainer}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  <IconComponent size={28} className={styles.icon} />
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            );
          })}

          
        </div>

        {/* 4 logos  */}
        {/* <div className="row mt-3">
            <div className="col-3">
                <img src="/triple.png" className={styles.logoSlide4} style={{objectFit:"contain"}} alt="" />
            </div>
            <div className="col-3">
                <img src="/sky.jpg" className={styles.logoSlide4} alt="" />
            </div>
            <div className="col-3">
              <img src="/protech.jpg" className={styles.logoSlide4} style={{objectFit:"contain"}} alt="" />
            </div>
            <div className="col-3">
              <img src="/hashira.jpg" className={styles.logoSlide4} style={{objectFit:"contain"}} alt="" />
            </div>
        </div> */}


        <div className={styles.logoStyle}>
          <div className={styles.logoDiv}>
            <img src="/triple.png" className={styles.logoSlide4} style={{objectFit:"contain"}} alt="" />
          </div>
          <div className={styles.logoDiv}>
            <img src="/sky.jpg" className={styles.logoSlide4}  alt="" />
          </div>
          <div className={styles.logoDiv}>
            <img src="/protech.jpg" className={styles.logoSlide4} style={{objectFit:"contain"}} alt="" />
          </div>
          <div className={styles.logoDiv}>
            <img src="/hashira.jpg" className={styles.logoSlide4} style={{objectFit:"contain"}} alt="" />
          </div>
        </div>

      </div>

      {/* Right Image Section */}
      <div className={styles.rightSection}>
        <img
          src="/img/test1.png"
          alt="JMC Centre Building"
          className={styles.buildingImage}
        />

        {/* Bottom Right Tagline */}
        <div className={styles.taglineBox}>
          <div className={styles.taglineIcon}>⭐</div>
          <div className={styles.taglineContent}>
            <h3 className={styles.taglineMain}>Building Futures.</h3>
            <h3 className={styles.taglineSub}>Creating Global Impact.</h3>
            <p className={styles.taglineDesc}>
              Shaping competent professionals for a better tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className={styles.diagonalDivider}></div>

    </div>
  );
}