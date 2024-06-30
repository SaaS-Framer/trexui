import React from "react";
import ComponentCard from "./ComponentCard";
import Image from "next/image";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { ComponentsPreview } from "@/types/ComponentsType";
import { useRouter } from "next/router";

type Props = {
  components: ComponentsPreview[];
  pages: number;
};
const perPage = 12;
function ComponentsGrid({ components, pages }: Props) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className=" flex h-full w-full flex-col overflow-auto">
      <div className=" grid w-full grid-cols-1 gap-5 pt-5 md:gap-10 md:p-5 lg:grid-cols-2 xl:grid-cols-3 ">
        {components.map((item) => {
          return (
            <div key={item._id} className=" col-span-1 overflow-hidden ">
              <ComponentCard item={item} />
            </div>
          );
        })}
      </div>
      {slug && (
        <div className=" mx-auto  mb-5 flex items-center gap-1 text-sm text-[#ffffffcf]">
          <button
            aria-label="Previous Page"
            onClick={() => {
              router.push(
                `/components/category/${slug[0] || "all"}/${
                  Number(slug[1] || 1) - 1
                }`
              );
            }}
            disabled={Number(slug[1] || 1) == 1}
            className=" flex h-9 w-9 items-center justify-center disabled:opacity-40 "
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          {new Array(Math.ceil(pages / perPage)).fill("").map((item, index) => {
            const page = index + 1;
            return (
              <button
                onClick={() => {
                  router.push(
                    `/components/category/${slug[0] || "all"}/${page}`
                  );
                }}
                key={page}
                className={`${
                  Number(slug[1] || 1) == page ? "bg-[#F9FAFB19] " : ""
                } flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold hover:opacity-80`}
              >
                {page}
              </button>
            );
          })}
          <button
            aria-label="Next Page"
            onClick={() => {
              router.push(
                `/components/category/${slug[0] || "all"}/${
                  Number(slug[1] || 1) + 1
                }`
              );
            }}
            disabled={Number(slug[1] || 1) == Math.ceil(pages / perPage)}
            className=" flex h-9 w-9 items-center justify-center disabled:opacity-40"
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default ComponentsGrid;
