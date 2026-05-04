import s from "../components/styles/Testimonials.module.css"

export default function TestimonialCard() {
  return (
    <div className={s.testimonialCard}>
      <div className={s.quote}>“</div>

      <p className={s.testimonialText}>
        Working with this team was an absolute pleasure. They delivered exactly
        what we needed, on time and beyond our expectations.
      </p>

      <div className={s.divider}></div>

      <div className={s.testimonialFooter}>
        <div className={s.userInfo}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className={s.avatar}
          />
          <div>
            <h4 className={s.name}>Sarah Johnson</h4>
            <p className={s.role}>Marketing Manager,<br />BrightWave Inc.</p>
          </div>
        </div>

        <div className={s.stars}>★★★★★</div>
      </div>
    </div>
  );
}