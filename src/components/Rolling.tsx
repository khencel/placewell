import { Swiper, SwiperSlide } from "swiper/react";
import s from "./styles/rolling.module.css"
import { Navigation } from "swiper/modules";

interface RollingProps {
    data: any[]
}

export default function Rolling({ data }: RollingProps) {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={false}
            // modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            speed={800}
            navigation={true}   
            modules={[Navigation]}
            breakpoints={{
                0: {
                slidesPerView: 1,
                spaceBetween: 10,
                },
                576: {
                slidesPerView: 1.2, // may konting peek
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 15,
                },
                992: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
            }}
        >
            {
                data.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div>
                            <div>
                                <img className={s.styleImage} src={item.image} alt="" />
                            </div>
                            <div className="mt-3">
                                <h4 style={{color:"#448153"}}>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            
            
        </Swiper>
    );
}