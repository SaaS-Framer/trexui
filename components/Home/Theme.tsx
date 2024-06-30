import React from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { MdOutlineStorefront } from "react-icons/md";

type Props = {};

function Theme({}: Props) {
  return (
    <div className=" text-textPrimaryLight ">
      <div className=" mx-autos container flex h-full flex-col items-center xl:flex-row">
        <div className="flex h-full w-full flex-col justify-center ">
          <div className=" my-1 text-3xl font-extrabold md:text-4xl">
            Stunning React / NextJS
          </div>
          <span className=" mb-1 w-fit bg-gradient-to-r from-primary to-[#8f5cf7] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl ">
            Themes
          </span>
          <div className=" mt-3 leading-relaxed text-hometextprimary md:w-4/5">
            Unleash your website's potential with our captivating themes.
            Elevate your online presence with stunning designs tailored to your
            style.
          </div>
          <button
            className=" text-transparen mt-5 flex w-fit transform items-center gap-2 rounded-3xl bg-gradient-to-r from-primary to-[#8f5cf7] px-3 py-2 text-xs font-medium text-white transition duration-300 hover:scale-105 active:scale-90
                        md:px-4 md:py-2.5 md:text-sm "
          >
            <MdOutlineStorefront />
            Coming Soon
          </button>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="my-10 flex aspect-[382/253] w-full items-center justify-end overflow-hidden xl:my-0 xl:py-14"
        >
          <div className=" my-10  flex aspect-[382/253] items-center justify-end overflow-hidden rounded-xl xl:my-0 xl:w-[90%] xl:py-14">
            <div
              className=" w-full"
              style={{
                // width: "100%",
                paddingBottom: "100%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/oFDSjMfe11iiOgQRfY"
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
