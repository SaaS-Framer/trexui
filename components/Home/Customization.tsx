import React, { memo } from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { BsGlobe2 } from "react-icons/bs";
import ComponentsViewer from "../components/ComponentsViewer";

type Props = {};

function Customization({}: Props) {
  return (
    <div className=" text-textPrimaryLight ">
      <div className=" mx-autos container flex h-full flex-col items-center xl:flex-row">
        <div className="  flex h-full flex-col justify-center xl:w-[50%] ">
          <div className="  my-1 text-3xl font-extrabold md:text-4xl">
            Customizable Component
          </div>
          <span className=" mb-1 w-fit bg-gradient-to-r from-[#0db16a] to-[#1ec9f2] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl ">
            Store
          </span>
          <div className=" mt-3 leading-relaxed text-hometextprimary md:w-4/5">
            Our component store offers a wide range of options for various
            purposes. Pick ready-made components from our store, customize and
            build a website in just minutes.
          </div>
          <Link href={"/components"}>
            <button
              className=" text-transparen mt-5 flex w-fit transform items-center gap-2 rounded-3xl bg-gradient-to-r from-[#1ec9f2] to-[#0db16a] px-3 py-2 text-xs font-medium text-white transition duration-300 hover:scale-105 active:scale-90
                        md:px-4 md:py-2.5 md:text-sm "
            >
              <BsGlobe2 /> Explore Now
            </button>
          </Link>
        </div>
        <div className=" my-10 flex h-[380px] w-full items-center  justify-end xl:my-0 xl:h-[440px] xl:w-[50%] xl:py-14">
          <div className=" w-full xl:w-[90%]">
            <ComponentsViewer
              initCode={Code}
              editorHeight={340}
              colors={color}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Customization);

const Code = `export default function BasicButton() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <button className=" bg-[vksndf] text-white py-5 px-24 rounded-full hover:opacity-60 transition duration-300 ease-in-out">
        Add To Bag
      </button>
    </div>
  );
}`;
const color = `{
  "vksndf": "#111111"
}`;
