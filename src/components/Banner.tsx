import s from "../components/styles/Banner.module.css";
import { FaGlobe } from "react-icons/fa";

interface BannerProps {
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    haveBtnPrimary?:boolean;
    textButton?: string;
    customFontSize?:boolean

}

export default function Banner({ backgroundImage, title, subtitle, description, haveBtnPrimary,textButton,customFontSize }: BannerProps) {
  return (
    <section
      className={s.banner}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={s.overlay}></div>

      <div className={s.content}>
        <p className={s.tag}>{title}</p>

        {customFontSize ? (
          <h4 className={s.title1}>
            {subtitle}
          </h4>
        ) : (
          <h1 className={s.title}>
            {subtitle}
          </h1>
        )}
        

        <p className={s.desc}>
          {description}
        </p>

        {
          haveBtnPrimary && (
            <button className={`${s.btnprimary}`}>{textButton}</button>
          )
        
        }


      </div>

      
    </section>
  );
}