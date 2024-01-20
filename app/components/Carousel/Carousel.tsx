"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
import Furqat from "@/public/images/wework/furqat.webp";
import Ibrohim from "@/public/images/wework/ibrohim.webp";
import Zokir from "@/public/images/wework/zokir.webp";
import Kamron from "@/public/images/wework/kamron.webp";
import Dilshod from "@/public/images/wework/dilshod.webp";
import Shuhrat from "@/public/images/wework/shuhrat.webp";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    profession: "CEO",
    name: "Furqat  Teshaev",
    imgSrc: Furqat,
    in: "https://www.linkedin.com/in/furkat-teshaev-b16701199/",
  },
  {
    profession: "#developer",
    name: "Kamron Shodmonov",
    imgSrc: Kamron,
    in: "https://www.linkedin.com/in/kamronbekshodmonov/",
  },
  {
    profession: "#developer",
    name: "Ibrohim Fattohov",
    imgSrc: Ibrohim,
    in: "https://www.linkedin.com/in/ibrohim-fattohov/",
  },
  {
    profession: "#developer",
    name: "Shuhrat Ergashev",
    imgSrc: Shuhrat,
    in: "https://www.linkedin.com/in/shuhrat-ergashev-aa1771238/",
  },
  {
    profession: "#developer",
    name: "Dilshodbek Khodjakov",
    imgSrc: Dilshod,
    in: "https://www.linkedin.com/in/dilshodbek-khodjakov/",
  },
  {
    profession: "#developer",
    name: "Zokirjon  Murotov",
    imgSrc: Zokir,
    in: "https://www.linkedin.com/in/zokirjon-murotov-2a5200239/",
  },
];
export default function SwiperTest() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data?.map((items: any, i: any) => (
          <SwiperSlide key={i}>
            <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl overflow-hidden">
              <div className="relative">
                <div className="wr">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={182}
                    height={160}
                    className={`inline-block m-auto w-full ${
                      items.imgSrc === "/images/wework/shuhrat.webp"
                        ? "-translate-y-16"
                        : items.imgSrc === "/images/wework/ibrohim.webp"
                        ? "-translate-y-11"
                        : items.imgSrc === "/images/wework/dilshod.webp"
                        ? "-translate-y-11"
                        : items.imgSrc === "/images/wework/zokir.webp"
                        ? "-translate-y-14"
                        : items.imgSrc === "/images/wework/kamron.webp"
                        ? "-translate-y-5"
                        : items.imgSrc === "/images/wework/furqat.webp"
                        ? "-translate-y-4"
                        : null
                    }`}
                  />
                </div>
                <Link href={items.in} target="_blank">
                  <Image
                    src={"/images/wework/linkedin.svg"}
                    alt="greenbg"
                    width={20}
                    height={20}
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-10 hover:translate-y-8 transition"
                  />
                </Link>
              </div>
              <h4 className="text-4xl font-bold pt-14">{items.name}</h4>
              <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                {items.profession}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
