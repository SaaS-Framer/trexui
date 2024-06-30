import React from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { AiOutlineRead } from "react-icons/ai";
import Image from "next/image";

type Props = {};

function Blog({}: Props) {
  return (
    <div className=" text-textPrimaryLight">
      <div className=" mx-autos container flex h-full w-full flex-col items-center xl:flex-row-reverse">
        <div className=" flex h-full w-full flex-col items-end justify-center xl:w-[50%]">
          <div className=" w-full xl:w-[90%]">
            <div className=" my-1 w-fit text-3xl font-extrabold md:text-4xl">
              Creative Musings <br />
            </div>
            <span className=" mb-1 w-fit bg-gradient-to-r from-[#ff8c00] to-[#ff4081] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl ">
              Blog
            </span>
            <div className=" mt-3 leading-relaxed text-hometextprimary">
              Explore captivating content, gain insights, and create stunning
              interfaces. Join us and unleash your creativity!
            </div>
            <Link href={"/blog"}>
              <button
                className=" text-transparen mt-5 flex w-fit transform items-center gap-2 rounded-3xl bg-gradient-to-r from-[#ff8c00] to-[#ff4081] px-3 py-2 text-xs font-medium text-white transition duration-300 hover:scale-105 active:scale-90
                        md:px-4 md:py-2.5 md:text-sm "
              >
                <AiOutlineRead />
                Read Blog
              </button>
            </Link>
          </div>
        </div>
        <div className="relative my-10 flex items-center  overflow-hidden rounded-lg xl:my-0 xl:w-[50%] xl:py-14">
          <Link href={"/blog"}>
            <img
              alt="Trex UI Blog"
              src="/blog.png"
              className=" h-full w-full transform cursor-pointer rounded-xl object-contain object-center brightness-125
                        transition duration-300 lg:hover:scale-105 xl:w-[85%]
                        "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
