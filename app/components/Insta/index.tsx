import Image from "next/image";
import Link from "next/link";

const Insta = () => {
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
          <Link href={"https://youtube.com/shorts/8hgvsfU7tsc"} target="_blank">
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        <div className="mx-auto imageContainer">
          <Image
            src="/images/insta/malika.webp"
            width={306}
            height={306}
            alt="instaTwo"
            className="rounded-2xl"
          />
          <Link href={"https://youtube.com/shorts/2aQ5GM1n9Qk"} target="_blank">
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        <div className="mx-auto imageContainer">
          <Image
            src="/images/insta/iroda.webp"
            width={306}
            height={306}
            alt="instaThree"
            className="rounded-2xl"
          />
          <Link
            href={"https://www.youtube.com/shorts/GinnkDF7w1A"}
            target="_blank"
          >
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        <div className="mx-auto imageContainer">
          <Image
            src="/images/insta/sunbula.webp"
            width={306}
            height={306}
            alt="instaFour"
            className="rounded-2xl"
          />
          <Link href={"https://youtube.com/shorts/UpciodTd59I"} target="_blank">
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/footer/youtube.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insta;
