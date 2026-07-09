import React, { useState } from 'react';
import styles from '@/styles/FAQ.module.css';

const FAQ_DATA = [
  {
    question: 'Why hire Filipino workers?',
    answer:
      'Filipino workers are recognized worldwide for their professionalism, strong work ethic, adaptability, English communication skills, and dedication. They are highly regarded across various industries and have earned the trust of employers around the world. ',
  },
  {
    question: 'Why choose Placewell International?',
    answer:
      "With 50 years of recruitment excellence, Placewell International is one of the Philippines' most trusted licensed recruitment agencies. We have over 15 branch offices and 5 affiliated training centers all across the Philippines. Our experienced team provides personalized, end-to-end support—from employer accreditation to recruitment and training to the eventual successful deployment of qualified Filipino workers.",
  },
  {
    question: 'What are Placewell International’s services?',
    answer:
      `
        <p>Placewell International provides complete end-to-end recruitment solutions, including: </p>
        <ul>
          <li>Employer Accreditation</li>
          <li>MWO Coordination</li>
          <li>Job Order Processing</li>
          <li>Candidate Sourcing and Screening</li>
          <li>Employer Interview Arrangements (Including Trade Tests)</li>
          <li>Visa Coordination </li>
          <li>Documentation Assistance</li>
          <li>Worker Deployment </li>
          <li>Post-Deployment Monitoring</li>
        </ul>
      `
  },
];

const Accreditation_Process = [
  {
    question: 'What is accreditation?',
    answer:
      'Accreditation is the process by which a foreign employer is authorized to recruit Filipino workers through a licensed Philippine recruitment agency.',
  },
  {
    question: 'Why is accreditation required?',
    answer:
      'Accreditation is required before a foreign company can legally hire Filipino workers through a Philippine recruitment agency. It ensures compliance with Philippine labor regulations and protects the welfare of Filipino workers.',
  },
  {
    question: ' What are the basic requirements for accreditation?',
    answer:
      `
        <p>Requirements may vary depending on the country and the Migrant Workers Office (MWO) with jurisdiction. Generally, the required documents include:</p>
        <ul>
          <li>Company Registration Certificate </li>
          <li>Business License (if applicable) </li>
          <li>Company Profile</li>
          <li>Recruitment Agreement</li>
          <li>Job Order </li>
          <li>Master Employment Contract</li>
          <li>Undertaking or Employer's Declaration</li>
          <li>Proof of Accommodation</li>
          <li>Copy of the Authorized Signatory's Passport or Valid ID</li>
        </ul>
      `,
  },
  {
    question: 'How long does the accreditation process take?',
    answer:
      `
        <ul>
          <li>Initial Accreditation: Approximately 2–4 weeks, depending on the completeness of the documents and MWO evaluation. </li>
          <li>Additional Job Orders: Approximately 2–3 weeks. </li>
        </ul>
      `,
  },
  {
    question: 'Is accreditation required only once?',
    answer:
      'Yes. Once your company has been accredited by the appropriate MWO, you generally do not need to undergo the full accreditation process again unless the accreditation expires or there are significant changes to your company. For additional manpower requirements, only an Additional Job Order is normally required.',
  },
  {
    question: 'Do all documents need to be signed and stamped?',
    answer:
      'Yes. Most accreditation documents must be signed by the authorized company representative and bear the company stamp or official seal, where applicable.',
  },
  {
    question: 'Does the company need to send original documents?',
    answer:
      'Yes. Scanned copies are initially submitted for MWO evaluation. Once approved, the original signed and stamped documents must be sent to the MWO for verification. ',
  },
  {
    question: 'Is MWO verification required? ',
    answer:
      "Yes. Accreditation documents must be reviewed and verified by the Philippine Migrant Workers Office (MWO) with jurisdiction over the employer's location.",
  },
  {
    question: 'What happens if the MWO issues compliance requirements?',
    answer:
      "The employer must submit the revised or additional documents requested by the MWO. Processing will continue once all compliance requirements have been completed.",
  },
  {
    question: 'What happens if our company changes its authorized signatory?',
    answer:
      "The MWO must be informed, and updated documents reflecting the new authorized signatory may be required before further processing.",
  },
  {
    question: 'Do we need to visit the Philippines during the recruitment process?',
    answer:
      "No. The entire accreditation and recruitment process can be handled remotely. Interviews may be conducted online through Microsoft Teams, Zoom, Google Meet, or other video conferencing platforms.",
  },
];

const Recruitment_Process = [
  {
    question: 'How does Placewell International source Filipino workers?',
    answer:
      "Placewell International has over 15 branches strategically located across the Philippines, enabling us to source qualified candidates nationwide. In addition to our branch network, we actively recruit workers through our Facebook page which has over 500,000 followers and recruitment events that are sponsored by the Philippine government. This nationwide recruitment strategy allows us to quickly identify and provide skilled, semi-skilled, and professional workers based on our clients' manpower requirements.",
  },
  {
    question: 'How does Placewell International ensure the quality of its workers?',
    answer:
      `
        <p> Before candidates are endorsed to employers, they undergo a comprehensive screening and selection process conducted by our recruitment specialists. This includes:</p>
        <ul>
          <li>Initial interview and document screening </li>
          <li>Assessment of English communication skills</li>
          <li>Verification of work experience and qualifications</li>
          <li>Evaluation of whether the applicant meets the employer's job requirements </li>
          <li>Shortlisting of qualified candidates for employer interviews </li>
        </ul>
        <p>Qualified applicants are added to our talent pool, allowing us to quickly provide pre-screened candidates whenever our clients have urgent manpower requirements. This ensures that employers interview only the most suitable and qualified candidates. </p>
      `,
  },
  {
    question: 'Can we choose the workers ourselves?',
    answer:
      "Yes. Placewell International pre-screens and shortlists qualified candidates, but the final hiring decision always rests with the employer.",
  },
  {
    question: 'How many workers can we hire?',
    answer:
      "There is no fixed limit. The number of workers depends on your approved Job Order and your company's manpower requirements.",
  },
  {
    question: 'Can our company hire workers for different positions? ',
    answer:
      "Yes. A Job Order may include multiple job categories. If additional manpower is required later, Placewell International can assist in processing an Additional Job Order.",
  },
  {
    question: 'What industries do you recruit for?',
    answer:
      `
        <p>We recruit qualified workers for a wide range of industries, including: </p>
        <ul>
          <li>Truck Drivers</li>
          <li>Welders </li>
          <li>Construction </li>
          <li>Manufacturing </li>
          <li>Warehousing & Logistics</li>
          <li>Hospitality </li>
          <li>Healthcare </li>
          <li>Food Processing</li>
          <li>Engineering</li>
          <li>Agriculture</li>
          <li>Automotive</li>
          <li>And many more industries upon request.</li>
        </ul>
      `,
  },
  {
    question: 'Can you recruit workers with specific qualifications or certifications?',
    answer:
      "Yes. We recruit candidates based on your exact requirements, including work experience, educational background, certifications, language proficiency, and specialized technical skills.",
  },
]

const Deployment = [
  {
    question: 'How long does it take to deploy Filipino workers from the Philippines?',
    answer:
      `
        <p>The deployment timeline depends on the position, visa processing, and employer requirements.</p>
        <p>Typical timeline:</p>
        <ul>
          <li>Recruitment & Selection: 2–4 weeks </li>
          <li>Visa Processing: 2–8 weeks </li>
          <li>Pre-Departure Processing: 1–2 weeks</li>
        </ul>
        <p>Estimated Total Deployment: 2–3 months from candidate selection to arrival in the destination country. </p>
      `,
  },
  {
    question: "Who processes the workers' documents?",
    answer:
      "Placewell International assists workers in processing all required Philippine documentation, while the employer processes the work permit and visa in the destination country. ",
  },
  {
    question: "What happens if a selected worker withdraws before deployment? ",
    answer:
      "We immediately source and recommend a qualified replacement to minimize delays in your recruitment schedule. ",
  },
  {
    question: "Can we request workers on an urgent basis? ",
    answer:
      "Yes. Through our nationwide branch network and existing talent pool, we can prioritize urgent manpower requests upon request. ",
  },
  {
    question: " What support does Placewell International provide after deployment?",
    answer:
      " Our commitment continues after deployment. We maintain close coordination with both employers and workers, provide assistance with post-deployment concerns, and support future manpower requirements to build long-term recruitment partnerships. ",
  },
]

const Costs_and_Fees = [
  {
    question: "What costs should employers expect?",
    answer:
      `
        <p>Employers are generally responsible for: </p>
        <ul>
          <li>MWO Verification Fees </li>
          <li>Courier Charges </li>
          <li>Visa and Work Permit Processing</li>
          <li>Airfare (where applicable)</li>
          <li>Insurance and other requirements under the destination country's labor laws</li>
        </ul>

        <p>A detailed cost breakdown will be provided before processing begins.</p>
      `,
  },
]


const TABS = ['General Information', 'Accreditation Process', 'Recruitment Process','Deployment', 'Costs & Fees'];


function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5L7 9L11 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NintendoSwitchOnlineFAQ() {
  const [activeTab, setActiveTab] = useState('General Information');
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className={styles.page}>
      {/* Top utility nav */}

      {/* Hero banner */}
      <section className={styles.hero}>
        <div className={styles.heroTitleRow}>
          {/* <svg viewBox="0 0 40 40" className={styles.heroIcon} aria-hidden="true">
            <rect x="2" y="2" width="15" height="36" rx="7.5" fill="#fff" />
            <rect x="23" y="2" width="15" height="36" rx="7.5" fill="#fff" />
            <circle cx="9.5" cy="12" r="2.2" fill="#E60012" />
            <circle cx="30.5" cy="10" r="2.6" fill="#E60012" />
          </svg> */}
          <h1 className={styles.heroTitle}>Frequently Asked Questions </h1>
        </div>
        <p className={styles.heroSubtitle}>(FAQ)</p>

        {/* Section tabs */}
        <div className={styles.tabBar}>
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.heroUnderline} />
      </section>

      {/* Tab content */}
      <main className={styles.content}>
        {activeTab === 'General Information' && (
          <>
                <h2 className={styles.faqHeading}>General Information</h2>
                <div className={styles.faqList}>
                {FAQ_DATA.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                    <div className={styles.faqItem} key={item.question}>
                        <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        >
                        <span className={styles.qMark}>Q.</span>
                        <span className={styles.qText}>{item.question}</span>
                        <ChevronIcon open={isOpen} />
                        </button>
                        {isOpen && (
                        <div className={styles.faqAnswer}>
                            <span className={styles.aMark}>A.</span>
                            <span className={styles.aText} dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
            </>
        )}

        {activeTab === 'Accreditation Process' && (
          <>
                <h2 className={styles.faqHeading}>Accreditation Process</h2>
                <div className={styles.faqList}>
                {Accreditation_Process.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                    <div className={styles.faqItem} key={item.question}>
                        <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        >
                        <span className={styles.qMark}>Q.</span>
                        <span className={styles.qText}>{item.question}</span>
                        <ChevronIcon open={isOpen} />
                        </button>
                        {isOpen && (
                        <div className={styles.faqAnswer}>
                            <span className={styles.aMark}>A.</span>
                            <span className={styles.aText} dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
            </>
        )}

        {activeTab === 'Recruitment Process' && (
          <>
                <h2 className={styles.faqHeading}>Recruitment Process</h2>
                <div className={styles.faqList}>
                {Recruitment_Process.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                    <div className={styles.faqItem} key={item.question}>
                        <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        >
                        <span className={styles.qMark}>Q.</span>
                        <span className={styles.qText}>{item.question}</span>
                        <ChevronIcon open={isOpen} />
                        </button>
                        {isOpen && (
                        <div className={styles.faqAnswer}>
                            <span className={styles.aMark}>A.</span>
                            <span className={styles.aText} dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
            </>
        )}

        {activeTab === 'Deployment' && (
          <>
                <h2 className={styles.faqHeading}>Deployment</h2>
                <div className={styles.faqList}>
                {Deployment.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                    <div className={styles.faqItem} key={item.question}>
                        <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        >
                        <span className={styles.qMark}>Q.</span>
                        <span className={styles.qText}>{item.question}</span>
                        <ChevronIcon open={isOpen} />
                        </button>
                        {isOpen && (
                        <div className={styles.faqAnswer}>
                            <span className={styles.aMark}>A.</span>
                            <span className={styles.aText} dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
            </>
        )}
        {activeTab === 'Costs & Fees' && (
          <>
                <h2 className={styles.faqHeading}>Costs & Fees</h2>
                <div className={styles.faqList}>
                {Costs_and_Fees.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                    <div className={styles.faqItem} key={item.question}>
                        <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        >
                        <span className={styles.qMark}>Q.</span>
                        <span className={styles.qText}>{item.question}</span>
                        <ChevronIcon open={isOpen} />
                        </button>
                        {isOpen && (
                        <div className={styles.faqAnswer}>
                            <span className={styles.aMark}>A.</span>
                            <span className={styles.aText} dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
            </>
        )}
      </main>
    </div>
  );
}