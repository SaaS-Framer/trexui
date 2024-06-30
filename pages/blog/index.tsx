import Link from "next/link";
import groq from "groq";
import HomeLayout from "@/components/Layout/Layout";
import client from "@/util/client";
import Image from "next/image";
import BlogCard from "@/components/blog/BlogCard";
import Head from "next/head";
import { apikeys } from "@/config/apikeys";

const Index = ({ posts }: any) => {
  console.log(JSON.stringify(posts, null, 2));

  return (
    <div className="  container mx-auto  py-5 md:py-16">
      <Head>
        <title>TrexUI - Blog</title>
        <meta
          name="description"
          content={`TREXUI BLOG
          Design Dive: Immersing in the World of Visual Creativity. Explore captivating content, gain insights, and create stunning interfaces. Join us and unleash your creativity!`}
        />
        <link rel="canonical" href={`${apikeys.baseUrl}blog`} />
        <meta property="og:title" content={`TrexUI - Next Gen UI`} />
        <meta
          property="og:description"
          content={`TREXUI BLOG
          Design Dive: Immersing in the World of Visual Creativity.`}
        />
        <meta property="og:url" content={`${apikeys.baseUrl}blog`} />
        <meta property="og:site_name" content={apikeys.baseUrl} />
        <meta
          property="og:image"
          content={`${apikeys.baseUrl}websitepreview.jpeg`}
        />
      </Head>
      <h1 className="md:text-md g-gradient-to-r from-14% w-fit bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-sm font-extrabold text-transparent ">
        TREXUI BLOG
      </h1>
      <h2 className=" mb-1 mt-2 text-xl font-extrabold text-textPrimaryLight md:mb-2 md:mt-3 md:text-4xl">
        Design Dive: Immersing in the World of Visual Creativity
      </h2>
      <p className="mb-5 text-xs md:mb-14  md:text-base">
        Explore captivating content, gain insights, and create stunning
        interfaces. Join us and unleash your creativity!
      </p>
      <div className=" grid grid-cols-3 gap-10">
        {posts.length > 0 &&
          posts.map(
            (item: any, index: number) =>
              item.slug && (
                <BlogCard
                  featured={index == 0 ? true : false}
                  item={item}
                  key={item._id}
                />
              )
          )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
      {
        author->,
        categories[]->,
        title,
        slug,
        mainImage,
        featuredText
      }
      `);
  //    && publishedAt < now()] | order(publishedAt desc)

  return {
    props: {
      posts,
    },
    revalidate: 100000,
  };
}

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
