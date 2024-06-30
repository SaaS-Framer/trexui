import React from "react";
import TextLogo from "../Ui/TextLogo";
import Link from "next/link";
import Button from "../Ui/Button";

type Props = {};

function Hero({}: Props) {
  return (
    <div className=" container mx-auto my-10 flex flex-col items-center gap-6 pb-10 text-center md:my-16  md:gap-8 md:pb-16">
      <TextLogo className="w-28" color={"#fff"} />
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-6xl ">
        Build cross platform apps with ease
      </div>
      <div className=" text-lg font-medium text-hometextsecondary md:text-2xl ">
        Write once, run everywhere!
      </div>
      <div className=" flex gap-3">
        <Button text="Coming Soon" />
      </div>
    </div>
  );
}

export default Hero;
