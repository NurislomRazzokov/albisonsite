import Slider, { Settings } from "react-slick";
import Image from "next/image";
import "./work.css";
import Link from "next/link";

const data = [
  {
    profession: "CEO",
    name: "Furqat  Teshaev",
    imgSrc: "/images/wework/furqat.webp",
    in: "https://www.linkedin.com/in/furkat-teshaev-b16701199/",
  },
  {
    profession: "#developer",
    name: "Kamron Shodmonov",
    imgSrc: "/images/wework/kamron.webp",
    in: "https://www.linkedin.com/in/kamronbekshodmonov/",
  },
  {
    profession: "#developer",
    name: "Ibrohim Fattohov",
    imgSrc: "/images/wework/ibrohim.webp",
    in: "https://www.linkedin.com/in/ibrohim-fattohov/",
  },
  {
    profession: "#developer",
    name: "Shuhrat Ergashev",
    imgSrc: "/images/wework/shuhrat.webp",
    in: "https://www.linkedin.com/in/shuhrat-ergashev-aa1771238/",
  },
  {
    profession: "#developer",
    name: "Dilshodbek Khodjakov",
    imgSrc: "/images/wework/dilshod.webp",
    in: "https://www.linkedin.com/in/dilshodbek-khodjakov/",
  },
  {
    profession: "#developer",
    name: "Zokirjon  Murotov",
    imgSrc: "/images/wework/zokir.webp",
    in: "https://www.linkedin.com/in/zokirjon-murotov-2a5200239/",
  },
];

export const WeworkSlider = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      {/* @ts-ignore */}
      <Slider {...settings}>
        {/* @ts-ignore */}
        {data?.map((items: any, i: any) => (
          <div key={i}>
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
                    width={120}
                    height={120}
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-10 hover:translate-y-8 transition"
                  />
                </Link>
              </div>
              <h4 className="text-4xl font-bold pt-14">{items.name}</h4>
              <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                {items.profession}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
