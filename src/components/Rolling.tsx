import { Swiper, SwiperSlide } from "swiper/react";
import s from "./styles/rolling.module.css"
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

interface RollingProps {
    data: any[]
    perSlide?: number
    isLoop?: boolean
    isAutoplay?: boolean
}

export default function Rolling({ data, perSlide, isLoop, isAutoplay }: RollingProps) {
    return (
        <Swiper
            spaceBetween={20}
            loop={isLoop ?? false}
            modules={[Autoplay, Navigation]}
            autoplay={isAutoplay ? { delay: 2000 } : false}
            speed={800}
            navigation={true}   
            breakpoints={{
                0: {
                slidesPerView: 4,
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
                slidesPerView: perSlide ?? 3,
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
                                {/* <p>{item.description}</p> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            
            
        </Swiper>
    );
}