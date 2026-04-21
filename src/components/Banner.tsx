import s from "../components/styles/Banner.module.css";

interface BannerProps {
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
    description?: string;

}

export default function Banner({ backgroundImage, title, subtitle, description }: BannerProps) {
  return (
    <section
      className={s.banner}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={s.overlay}></div>

      <div className={s.content}>
        <p className={s.tag}>{title}</p>

        <h1 className={s.title}>
          {subtitle}
        </h1>

        <p className={s.desc}>
          {description}
        </p>

      </div>

      
    </section>
  );
}