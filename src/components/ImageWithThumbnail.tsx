"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";



export default function ImageWithThumbnail() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const images = [
    "/img/client/1.jpg",
    "/img/client/2.jpg",
    "/img/client/3.jpg",
    "/img/client/4.jpg",
    "/img/client/5.jpg",
  ];

  return (
    <>
      {/* Main Preview */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        spaceBetween={10}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} style={{ width: "100%", borderRadius: "16px" }} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        watchSlidesProgress
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              style={{
                width: "100%",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}