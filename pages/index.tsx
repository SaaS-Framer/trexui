import HomeLayout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import Customization from "@/components/Home/Customization";
import Blog from "@/components/Home/Blog";
import Theme from "@/components/Home/Theme";
import HeroTwo from "@/components/Home/HeroTwo";
import HeroThree from "@/components/Home/HeroThree";
import Features from "@/components/Home/Features";
import Head from "next/head";
import { apikeys } from "@/config/apikeys";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5 py-10 md:gap-16 md:py-16">
      <Head>
        <title>TrexUI - Home</title>
        <link rel="canonical" href="https://www.trexui.com" />
      </Head>
      {/* <Hero /> */}
      {/* <HeroTwo /> */}
      <HeroThree />
      <Features />
      <Customization />
      <Blog />
      <Theme />
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
