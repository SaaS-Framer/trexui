import urlFor from "@/util/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  featured?: boolean;
  item?: any;
};

function BlogCard({ featured, item }: Props) {
  console.log(JSON.stringify(item.mainImage, null, 2));
  return (
    <div
      className={`${
        featured ? " col-span-3" : "col-span-3 md:col-span-1"
      } capitalize`}
    >
      <Link
        href={`/blog/${item.slug.current}`}
        className={` flex  ${
          featured ? "md:aspect-[1232/400] md:flex-row" : "md:flex-col "
        } flex-col`}
      >
        <div
          className={` ${
            featured ? " aspect-[1232/521] md:w-[67.5%] " : " aspect-[1232/521]"
          } md:h-full `}
        >
          <div
            className={` relative ${
              featured ? "md:w-[94%]" : "w-full"
            }  h-full`}
          >
            <Image
              src={urlFor(item.mainImage).url()}
              fill
              alt="TrexUI"
              className=" h-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div
          className={` flex h-full flex-1 flex-col justify-center text-[#f1f1f1]`}
        >
          <h3
            className={` md:text-md  text-sm text-primary ${
              featured ? "mt-5 md:mt-0" : " mb-1 mt-4 "
            }`}
          >
            {item.categories[0].title}
          </h3>
          <div
            className={` font-bold md:font-semibold  ${
              featured
                ? "md:mb-5 md:mt-3 md:text-3xl md:leading-10"
                : "mb-0.5 mt-1 text-lg md:mb-1 md:mt-0"
            } `}
          >
            {item.title}
          </div>
          <h2
            className={` text-sm text-hometextprimary  ${
              featured ? "md:text-lg" : ""
            }`}
          >
            {item.featuredText}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default React.memo(BlogCard);
