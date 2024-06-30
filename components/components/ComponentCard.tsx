import { ComponentsPreview } from "@/types/ComponentsType";
import { getColor } from "@/util/getColor";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";

type Props = {
  item: ComponentsPreview;
};

function ComponentCard({ item }: Props) {
  return (
    <Link href={`/components/${item._id}`}>
      {/* <Link href={"/components/234234"}></Link> */}
      <div className=" relative flex h-full w-full flex-col overflow-hidden">
        <div className="  relative aspect-[5/3] h-full w-full">
          <Image
            src={item.previewImage}
            fill={true}
            alt={"test"}
            className="  h-full w-full  rounded-md"
          />
        </div>
        <div className=" bottom-0 flex w-full flex-col justify-evenly  rounded-b-md py-1.5 font-medium  capitalize text-white backdrop-blur-lg backdrop-saturate-200">
          <div className=" mb-1 flex items-center justify-between py-1 text-sm">
            {item.title}
          </div>
          <div className=" flex flex-wrap gap-2">
            {item.technologies.map((technology) => {
              return (
                <div
                  key={technology}
                  className=" w-fit rounded-md px-2.5 py-1.5 text-xs leading-none"
                  style={{
                    backgroundColor: getColor(technology),
                  }}
                >
                  {technology}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ComponentCard;
