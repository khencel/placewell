import s from "../components/styles/Banner.module.css";

export default function Banner() {
  return (
    <section
      className={s.banner}
      style={{ backgroundImage: "url('/img/banner/japan1.jpg')" }}
    >
      <div className={s.overlay}></div>

      <div className={s.content}>
        <p className={s.tag}>ABOUT US</p>

        <h1 className={s.title}>
          Corporate Identity
        </h1>

        <p className={s.desc}>
          Placewell International is a Filipino-owned, family-run manpower agency with over 50 years of experience in deploying Filipino workers overseas. Headquartered in Makati and supported by more than 15 branches nationwide, we recruit, train, and deploy Filipino workers to companies all over the world. Placewell is committed to providing its clients with dependable workers and service that is efficient, organized and highly responsive. At the same time, Placewell remains dedicated to empowering Filipinos by connecting them with employers that value them as people. 
        </p>

      </div>

      
    </section>
  );
}