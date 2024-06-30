// ./frontend/pages/post/[slug].tsx

import HomeLayout from "@/components/Layout/Layout";
import client from "@/util/client";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "@/components/blog/RichTextComponents";
import Image from "next/image";
import urlFor from "@/util/urlFor";
import ShareButtons from "@/components/blog/ShareButtons";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const Post = ({ post }: any) => {
  return (
    <article className=" relative mx-auto flex p-[1rem] py-5 text-textPrimaryLight md:py-16">
      <ShareButtons />
      <div className="  mx-auto">
        <section className=" mx-auto max-w-[864px]">
          <p className=" g-gradient-to-r from-14% w-fit bg-gradient-to-r from-emerald-500 via-sky-500 via-30% to-indigo-500 to-90% bg-clip-text  text-sm font-bold uppercase tracking-wide text-transparent">
            {post?.categories[0].title}
          </p>
          <div
            className={` mb-1 mt-2  text-3xl font-bold md:mb-5 md:mt-3 md:text-5xl md:font-semibold`}
          >
            {post?.title}
          </div>
          <h2 className={` text-sm text-hometextprimary md:text-lg`}>
            {post?.featuredText}
          </h2>
          <div className=" mt-3 flex items-center gap-3 text-xs">
            {post?.author && post?.author?.image ? (
              <Image
                src={urlFor(post?.author?.image).url()}
                width={20}
                height={20}
                className=" h-5 rounded-full object-fill"
                alt={post?.author?.name ? post?.author?.name : "TrexUI"}
              />
            ) : post?.author?.name ? (
              <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-[#F9FAFB09] font-bold">
                {post?.author?.name[0]}
              </div>
            ) : (
              <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-[#F9FAFB09] font-bold">
                T
              </div>
            )}
            <span className=" border-r-2 border-homeborder pr-3 text-hometextprimary">
              By {post?.author?.name ? post?.author?.name : "TrexUI"}
            </span>
            <span className=" text-hometextprimary ">
              Posted{" "}
              {new Date(post?.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className=" relative my-5 aspect-[1188/668] max-w-[1188px]">
            <div className={` relative h-full w-full`}>
              {post?.mainImage && (
                <Image
                  src={urlFor(post?.mainImage).url()}
                  fill
                  alt="TrexUI"
                  className=" h-full rounded-xl object-cover"
                />
              )}
            </div>
          </div>
        </section>
        <section className=" mx-auto max-w-[718px]">
          <PortableText value={post?.body} components={RichTextComponents} />
        </section>
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params as Params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
    {...,author->,categories[]->,}
  `,
    { slug }
  );

  return {
    props: {
      post,
    },
    revalidate: 100000,
  };
};

export default Post;

Post.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
