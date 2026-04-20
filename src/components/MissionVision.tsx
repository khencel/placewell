import s from '../components/styles/MissionVision.module.css'

const cards = [
  {
    title: 'Vision',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#8F6843" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="6" stroke="#8F6843" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#8F6843"/>
        <line x1="12" y1="2" x2="12" y2="5" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="19" x2="12" y2="22" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2" y1="12" x2="5" y2="12" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="19" y1="12" x2="22" y2="12" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: 'A Philippine manpower services company, born of excellence, nurtured by expertise, and committed to leading in meeting the needs of global employers for highly competent, professional, and skilled Filipino workers.',
  },
  {
    title: 'Mission',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="#709C6B" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'To be the most trusted, most reliable Philippine manpower services company in the world, recognized for readily available efficient services to our clients; for loyalty to our employees; for fidelity to our stockholders; and for social responsibility to our community.',
  },
  {
    title: 'Corporate Philosophy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#448153" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#448153" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#448153" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#448153" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: `<strong>We are a people company that builds lasting relationships.</strong> <br> We care for people because they are:
      <ol style="text-align:left">
        <li>Individuals with dignity to be respected and rights to be protected.</li>
        <li>Employers who generate economic value.</li>
        <li>Workers who need to be treated and rewarded fairly.</li>
      </ol>
      <strong>Clients count first.</strong>
      <br> We exist for our clients and, thus, work to provide them with on-time job-ready, and competent workers as required, by employing only ethical and modern recruitment practices and strategies that conform to international standards.
        <br><strong>We take our corporate social responsibility seriously.</strong><br>We share the rewards of business with the communities where we operate, believing that by giving freely, you shall receive tenfold.
      `,
    isHtml: true,
  },
];

export default function MissionVision() {
  return (
    <section className={s.section}>
      <div className="header">
        <h2 className="title">Mission Vision</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className={s.grid}>
        {cards.map((card) => (
            <div className={s.card} key={card.title}>
                <div className={s.iconWrapper}>
                {card.icon}
                </div>
                <h3 className={s.cardTitle}>{card.title}</h3>

                {card.isHtml ? (
                <div className={s.cardText} dangerouslySetInnerHTML={{ __html: card.text }} />
                ) : (
                <p className={s.cardText}>{card.text}</p>
                )}
            </div>
            ))}
      </div>
    </section>
  );
}