import s from "../components/styles/Testimonials.module.css"

interface TestimonialCardProps {
  name?: string;
  position?: string;
  company?: string;
  avatar?: string;
  info?:string
}

export default function TestimonialCard({name, position, company, avatar, info}:TestimonialCardProps) {
  return (
    <div className={s.testimonialCard}>
      <div className={s.quote}>“</div>

      <p className={s.testimonialText}>
        {info}
      </p>

      <div className={s.divider}></div>

      <div className={s.testimonialFooter}>
        <div className={s.userInfo}>
          <img
            src={avatar}
            alt="user"
            className={s.avatar}
          />
          <div>
            <h4 className={s.name}>{name}</h4>
            <p className={s.role}>{position},<br />{company}</p>
          </div>
        </div>

        <div className={s.stars}>★★★★★</div>
      </div>
    </div>
  );
}