import urlFor from "@/util/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className=" relative m-10 mx-auto h-96 w-full">
          <Image
            src={urlFor(value).url()}
            className=" object-contain"
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className=" ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className=" ml-10 list-decimal space-y-5 py-5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className=" py-5 text-4xl font-semibold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className=" py-5 text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className=" py-5 text-2xl font-semibold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className=" py-5 text-xl font-semibold">{children}</h4>
    ),
    blockquote: ({children}: any) => (
      <blockquote className=" py-5 text-xl italic">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      return (
        <Link
          rel={rel}
          className=" underline decoration-primary transition duration-200 ease-in-out hover:text-primary"
          href={value.href}
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
