import React, { useEffect, useRef, useState } from "react";
import TextLogo from "../Ui/TextLogo";
import Link from "next/link";
import Button from "../Ui/Button";
import { BiGrid } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import type { LottiePlayer } from "lottie-web";

type Props = {};

function HeroThree({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: "/animplayer.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <div className=" container mx-auto flex flex-col items-center lg:flex-row">
      <div className=" flex h-full flex-col gap-5 pb-10 md:gap-5 xl:w-[65%]">
        <TextLogo className="w-28" color={"#fff"} />
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl ">
          Tailwind CSS Components
        </div>
        <div className=" text-lg font-medium text-hometextsecondary md:text-xl">
          Build website in minutes using our UI components, sections and pages
          with easy to use customization options.
        </div>

        <div className=" flex gap-5">
          <div className=" flex gap-3">
            <Link href={"/components"}>
              <button
                className=" text-transparen mt-5 flex w-fit transform items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:opacity-80
                        active:scale-90 md:h-[42px] md:px-4 "
              >
                <BsGridFill /> Explore Components
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" min-h-[436px] w-full xl:w-auto ">
        <div ref={ref} />
      </div>
    </div>
  );
}

export default HeroThree;
