import Head from "next/head";
import HomeNavbar from "./Navbar";
import { Inter } from "next/font/google";
import HomeFooter from "./Footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div className=" min-h-screen bg-homebackground text-hometextprimary antialiased">
      <Head>
        <title>TrexUI - Next Gen UI</title>
        <meta
          name="description"
          content="Tailwind CSS Components Build website in minutes using our UI components, sections and pages with easy to use customization options"
        />
      </Head>
      <HomeNavbar />
      <main className={inter.className}>{children}</main>
      <div className="  container mx-auto">
        <HomeFooter />
      </div>
    </div>
  );
}
