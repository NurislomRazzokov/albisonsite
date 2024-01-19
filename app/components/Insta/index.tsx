"use client";
import Image from "next/image";
import Link from "next/link";
import VideoModal from "../Youtubemodal/VideoModal";
import { useState } from "react";

const Insta = () => {
  const [showone, setShowone] = useState(false);
  const [showtwo, setShowtwo] = useState(false);
  const [showtree, setShowtree] = useState(false);
  const [showfour, setShowfour] = useState(false);
  return (
    <div
      id="result"
      className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden"
    >
      <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="mx-auto imageContainer">
          <Image
            src="/images/insta/zamira.webp"
            width={306}
            height={306}
            alt="instaOne"
            className="rounded-2xl"
          />
          <div>
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
              onClick={() => setShowone(true)}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>

        <div className="mx-auto imageContainer">
          <Image
            src="/images/insta/malika.webp"
            width={306}
            height={306}
            alt="instaTwo"
            className="rounded-2xl"
          />
          <div>
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
              onClick={() => setShowtwo(true)}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>

        <div className="mx-auto imageContainer">
          <Image
            src="/images/insta/iroda.webp"
            width={306}
            height={306}
            alt="instaThree"
            className="rounded-2xl"
          />
          <div>
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
              onClick={() => setShowtree(true)}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>

        <div className="mx-auto imageContainer">
          <Image
            src="/images/insta/sunbula.webp"
            width={306}
            height={306}
            alt="instaFour"
            className="rounded-2xl"
          />
          <div>
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
              onClick={() => setShowfour(true)}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
      </div>
      <VideoModal
        video={"https://youtube.com/embed/8hgvsfU7tsc?rel=1&showinfo=0"}
        isVisible={showone}
        onClose={() => setShowone(false)}
      />
      <VideoModal
        video={"https://youtube.com/embed/2aQ5GM1n9Qk?rel=0&showinfo=0"}
        isVisible={showtwo}
        onClose={() => setShowtwo(false)}
      />
      <VideoModal
        video={"https://www.youtube.com/embed/GinnkDF7w1A?rel=0&showinfo=0"}
        isVisible={showtree}
        onClose={() => setShowtree(false)}
      />
      <VideoModal
        video={"https://youtube.com/embed/UpciodTd59I?rel=0&showinfo=0"}
        isVisible={showfour}
        onClose={() => setShowfour(false)}
      />
    </div>
  );
};

export default Insta;
