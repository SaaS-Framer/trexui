import HomeLayout from "@/components/Layout/Layout";
import ComponentsFilers from "@/components/components/ComponentsFilers";
import ComponentsGrid from "@/components/components/ComponentsGrid";
import ComponentsLayout from "@/components/components/ComponentsLayout";
import { apikeys } from "@/config/apikeys";
import { ComponentsPreview } from "@/types/ComponentsType";
import Head from "next/head";
import React from "react";

type Props = {
  components: ComponentsPreview[];
  count: number;
  slug: string[];
};

function Index({ components, count, slug }: Props) {
  const page = Number(slug[1]) > 1 ? `- Page ${slug[1] || 1}` : '';

  return (
    <div className="flex w-full flex-col">
      <Head>
        <title>{`${slug[0][0].toUpperCase() + slug[0].slice(1)} ${page}`}</title>
        <meta name="description" content={`TrexUI Components Category ${slug[0][0].toUpperCase() + slug[0].slice(1)} ${page}`} />
      </Head>
      <ComponentsFilers />
      <ComponentsGrid components={components} pages={count} />
    </div>
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
  const page = slug[1] || 1;
  const filteredSlug = slug[0] === "all" ? "" : slug[0];
  const res = await fetch(
    `${apikeys.apiUrl}components?category=${filteredSlug}&page=${page}`
  );
  const data = await res.json();
  const sideMenu = await fetch(`${apikeys.apiUrl}componentscategories`);
  const sideMenuRes = await sideMenu.json();

  if (data) {
    return {
      props: {
        components: data.data,
        count: data.count,
        slug,
        key: filteredSlug + page,
        sideMenuRes,
      },
      revalidate: 60 * 10, // 10 min
    };
  } else {
    return {
      notFound: true,
    };
  }
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <HomeLayout>
      <ComponentsLayout initData={page.props.sideMenuRes}>{page}</ComponentsLayout>
    </HomeLayout>
  );
};