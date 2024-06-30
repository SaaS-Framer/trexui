import HomeLayout from "@/components/Layout/Layout";
import React, { useEffect } from "react";

import ComponentsLayout from "@/components/components/ComponentsLayout";
import ComponentsViewer from "@/components/components/ComponentsViewer";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";
import ComponentsGrid from "@/components/components/ComponentsGrid";
import ComponentCard from "@/components/components/ComponentCard";
import { HiStar } from "react-icons/hi";
import ShareButtons from "@/components/blog/ShareButtons";
import { ComponentType } from "@/types/ComponentsType";
import { getColor } from "@/util/getColor";
import { apikeys } from "@/config/apikeys";
import Head from "next/head";
type Props = {
  component: ComponentType;
  relatedcomponents: ComponentType[];
};

function Index({ component, relatedcomponents }: Props) {
  const router = useRouter();

  return (
    // <ComponentsLayout>
    <div className="  container mx-auto py-5">
      <Head>
        <title>{component.title}</title>
        <meta
          name="description"
          content={`${component.technologies.join(", ")}, ${component.title} ${
            component.description || ""
          }`}
        />
      </Head>
      <div className=" flex flex-col justify-between pb-3 text-textPrimaryLight md:flex-row md:py-3">
        <div>
          <p className=" g-gradient-to-r from-14% w-fit bg-gradient-to-r from-emerald-500 via-sky-500 via-30% to-indigo-500 to-90% bg-clip-text  text-sm font-bold uppercase tracking-wide text-transparent">
            {component.type}
          </p>
          <div
            className={` mb-2 mt-2 text-2xl font-bold md:text-3xl md:font-bold`}
          >
            {component.title}
          </div>
          <div className=" flex flex-wrap gap-2">
            {component.technologies.map((e) => {
              return (
                <div
                  key={e}
                  className=" w-fit rounded-3xl px-2 py-1.5 text-[10px] leading-none"
                  style={{
                    backgroundColor: getColor(e),
                  }}
                >
                  {e}
                </div>
              );
            })}
          </div>
          {/* <div className=" mt-3 flex items-center gap-1 text-xs font-semibold">
            <HiStar />
            5.0 • 1.2k+ review
          </div> */}
          <div className=" flex items-center gap-5">
            <ShareButtons type={2} />
          </div>
        </div>
        <div>
          {/* <button className=' w-full text-right'>Favourite</button> */}
        </div>
      </div>
      <div className=" mb-5 mt-3">
        <ComponentsViewer initCode={component.code} colors={component.colors} />
      </div>
      {relatedcomponents.length > 0 && (
        <div className=" border-t-[1px] border-homeborder">
          <div
            className={` mb-3 mt-2  text-xl font-bold text-textPrimaryLight md:mb-5 md:mt-3 md:text-2xl md:font-bold`}
          >
            Related components
          </div>
          <div className=" grid w-full grid-cols-1 gap-10 md:grid-cols-4 ">
            {relatedcomponents?.map((item) => {
              return (
                <div
                  key={item._id}
                  className=" col-span-1 aspect-[4/3] overflow-hidden"
                >
                  <ComponentCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
    // </ComponentsLayout>
  );
}

export default Index;

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export const getStaticProps = async (context: {
  params: {
    slug: string;
  };
}) => {
  const {
    params: { slug },
  } = context;
 try {
  const res = await fetch(`${apikeys.apiUrl}components/${slug}`);
  const data = await res.json();

  if (data) {
    return {
      props: {
        component: data.data,
        relatedcomponents: data.relatedcomponents,
      },
      revalidate: 1000000, // 10 Day
    };
  } else {
    return {
      notFound: true,
    };
  }
} catch (error) {
    console.error('Error fetching component:', error);
    return {
      notFound: true,
    };
  }
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
