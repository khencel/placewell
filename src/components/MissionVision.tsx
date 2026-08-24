import s from '../components/styles/MissionVision.module.css'
import { useTranslations } from "next-intl";
import getMissionVision from '../data/missionVision';


export default function MissionVision() {
  const cards = getMissionVision();
  const t = useTranslations();
  return (
    <section className={s.section}>
      <div className="header">
        <h2 className="title">{t("corporateIdentity.mission")}</h2>
        {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
      </div>

      <div className={s.grid}>
        {cards.map((card) => (
            <div className={s.card} key={card.title}>
                <div className={s.iconWrapper}>
                {card.icon}
                </div>
                <h3 className={s.cardTitle}>{card.title}</h3>

                
                <div className={s.cardText} dangerouslySetInnerHTML={{ __html: card.text }} />
               
            </div>
            ))}
      </div>
    </section>
  );
}