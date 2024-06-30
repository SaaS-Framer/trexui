import React from "react";
import TextLogo from "../Ui/TextLogo";
import Link from "next/link";
import Button from "../Ui/Button";
import { BiGrid } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";

type Props = {};

function HeroTwo({}: Props) {
  return (
    <div className=" container mx-auto my-10 flex w-[70%] flex-col items-center gap-6 pb-10 text-center  md:my-16 md:gap-8 md:pb-16">
      <TextLogo className="w-28" color={"#fff"} />
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-6xl ">
        Ready to use customizable Tailwind CSS Components
      </div>
      <div className=" text-lg font-medium text-hometextsecondary md:text-2xl ">
        Build website in minutes using our UI components, sections and pages
        with easy to use customization options.
      </div>
      <div className=" flex gap-3">
        <Link href={"/components"}>
          <button
            className=" text-transparen mt-5 flex w-fit transform items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-3 py-2 text-xs font-medium text-white transition duration-300 hover:scale-105 active:scale-90
                        md:px-5 md:py-3 md:text-sm "
          >
            <BsGridFill /> Explore Components
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroTwo;
