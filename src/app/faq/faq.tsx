import React, { useState } from 'react';
import styles from '@/styles/FAQ.module.css';

interface FaqProps{
  t: (key: string) => string
}

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

export default function NintendoSwitchOnlineFAQ({t}:FaqProps) {
  const [activeTab, setActiveTab] = useState(t('generalTab'));
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const FAQ_DATA = [
  {
    question: t('hireFilipino'),
    answer:
      t('Filipino')
  },
  {
    question: t('whyChoose'),
    answer:
      t('With')
  },
  {
    question: t('whatPlacewell'),
    answer:
      `
        <p>${t('Placewell')}</p>
        <ul>
          <li>${t('Employer')}</li>
          <li>${t('MWO')}</li>
          <li>${t('Job')}</li>
          <li>${t('Candidate')}</li>
          <li>${t('Interview')}</li>
          <li>${t('Visa')} </li>
          <li>${t('Documentation')}</li>
          <li>${t('Worker')} </li>
          <li>${t('Post')}</li>
        </ul>
      `
  },
];

const Accreditation_Process = [
  {
    question: t('accreditation'),
    answer:
      t('accreditationDesc')
  },
  {
    question: t('required'),
    answer:
      t('requiredDesc')
  },
  {
    question: t('requirements'),
    answer:
      `
        <p>${t('requirementsDesc')}</p>
        <ul>
          <li>${t('Registration')} </li>
          <li>${t('License')}</li>
          <li>${t('Profile')}</li>
          <li>${t('Agreement')}</li>
          <li>${t('Order')} </li>
          <li>${t('Master')}</li>
          <li>${t('Undertaking')}</li>
          <li>${t('Proof')}</li>
          <li>${t('Copy')}</li>
        </ul>
      `,
  },
  {
    question: t('How'),
    answer:
      `
        <ul>
          <li> ${t('Initial')}</li>
          <li>${t('Additional')} </li>
        </ul>
      `,
  },
  {
    question: t('Is'),
    answer:
     t('Yes'),
  },
  {
    question: t('Do'),
    answer:
      t('Most'),
  },
  {
    question: t('Does'),
    answer:
      t('Scanned'),
  },
  {
    question: t('verification'),
    answer:
      t('Philippine'),
  },
  {
    question: t('compliance'),
    answer:
      t('employer'),
  },
  {
    question:  t('signatory'),
    answer:
      t('informed'),
  },
  {
    question: t('visit'),
    answer:
      t('entire'),
  },
];

const Recruitment_Process = [
  {
    question: t('International'),
    answer:
      t('InternationalDesc'),
  },
  {
    question: t('quality'),
    answer:
      `
        <p> ${t('qualityDesc')}</p>
        <ul>
          <li>${t('qualityDesc1')} </li>
          <li>${t('qualityDesc2')}</li>
          <li>${t('qualityDesc3')}</li>
          <li>${t('qualityDesc4')} </li>
          <li>${t('qualityDesc5')} </li>
        </ul>
        <p>${t('qualityDesc6')}</p>
      `,
  },
  {
    question: t('ourselves'),
    answer:
      t('ourselvesDesc')
  },
  {
    question: t('hire'),
    answer:
      t('hireDesc'),
  },
  {
    question: t('positions'),
    answer:
      t('positionsDesc'),
  },
  {
    question: t('industries'),
    answer:
      `
        <p>${t('industriesDesc')} </p>
        <ul>
          <li>${t('industriesDesc1')} </li>
          <li>${t('industriesDesc2')}  </li>
          <li>${t('industriesDesc3')}  </li>
          <li>${t('industriesDesc4')}  </li>
          <li>${t('industriesDesc5')} </li>
          <li>${t('industriesDesc6')}  </li>
          <li>${t('industriesDesc7')}  </li>
          <li>${t('industriesDesc8')} </li>
          <li>${t('industriesDesc9')} </li>
          <li>${t('industriesDesc10')} </li>
          <li>${t('industriesDesc11')} </li>
          <li>${t('industriesDesc12')} </li>
        </ul>
      `,
  },
  {
    question: t('certifications'),
    answer:
      t('certificationsDesc'),
  },
]

const Deployment = [
  {
    question: t('Howlong'),
    answer:
      `
        <p>${t('HowlongDesc')}</p>
        <p>${t('HowlongDesc1')}</p>
        <ul>
          <li>${t('HowlongDesc2')}</li>
          <li>${t('HowlongDesc3')}</li>
          <li>${t('HowlongDesc4')}</li>
        </ul>
        <p>${t('HowlongDesc5')}</p>
      `,
  },
  {
    question: t('processes'),
    answer:
      t('processesDesc'),
  },
  {
    question: t('happens'),
    answer:
      t('happensDesc'),
  },
  {
    question: t('urgent'),
    answer:
      t('urgentDesc'),
  },
  {
    question: t('support'),
    answer:
      t('supportDesc'),
  },
]

const Costs_and_Fees = [
  {
    question: t('expect'),
    answer:
      `
        <p>${t('expectDesc')} </p>
        <ul>
          <li>${t('expectDesc1')} </li>
          <li>${t('expectDesc2')}</li>
          <li>${t('expectDesc3')}</li>
          <li>${t('expectDesc4')}</li>
          <li>${t('expectDesc5')}</li>
        </ul>

        <p>${t('expectDesc6')}</p>
      `,
  },
]


const TABS = [t('generalTab'), t('Accreditation'), t('Recruitment'),t('Deployment'), t('cost')];

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
          <h1 className={styles.heroTitle}>{t('Frequently')}</h1>
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
        {activeTab === t('generalTab') && (
          <>
                <h2 className={styles.faqHeading}>{t('generalTab')}</h2>
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

        {activeTab === t('Accreditation') && (
          <>
                <h2 className={styles.faqHeading}>{t('Accreditation')}</h2>
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

        {activeTab === t('Recruitment') && (
          <>
                <h2 className={styles.faqHeading}>{t('Recruitment')}</h2>
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

        {activeTab === t('Deployment') && (
          <>
                <h2 className={styles.faqHeading}>{t('Deployment')}</h2>
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
        {activeTab === t('cost') && (
          <>
                <h2 className={styles.faqHeading}>{t('cost')}</h2>
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