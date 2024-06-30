import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";

type Props = {
  type?: number;
};

function ShareButtons({ type = 1 }: Props) {
  const styles =
    type == 1
      ? " text-white gap-5 hidden bg-[#F9FAFB09] top-[128px] h-fit px-2.5 py-4 sticky lg:flex max-w-fit rounded-full flex-col backdrop-blur-lg border-[1px] border-homeborder  justify-center items-center"
      : " flex items-ceneter gap-4 my-4";
  const shareButton =
    type == 1
      ? "hover:opacity-70"
      : "w-8 h-8 rounded-full hover:bg-black items-center flex justify-center";
  return (
    <div className={styles}>
      <button className={shareButton}>
        <FaFacebookF />
      </button>
      <button className={shareButton}>
        <FaTwitter />
      </button>
      <button className={shareButton}>
        <FaLinkedinIn />
      </button>
      <button className={shareButton}>
        <FaPinterestP />
      </button>
      <button className={shareButton}>
        <FaRedditAlien />
      </button>
    </div>
  );
}

export default ShareButtons;
