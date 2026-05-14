import s from "../components/styles/Banner.module.css";
import { FaGlobe } from "react-icons/fa";

interface BannerProps {
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    haveBtnPrimary?:boolean

}

export default function Banner({ backgroundImage, title, subtitle, description, haveBtnPrimary }: BannerProps) {
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

        {
          haveBtnPrimary && (
            <button className={`${s.btnprimary} rounded-4`}><FaGlobe /> Visit Hashira Website</button>
          )
        
        }


      </div>

      
    </section>
  );
}