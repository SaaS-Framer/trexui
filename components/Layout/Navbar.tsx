import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import AuthButton from "../Ui/AuthMenu";
import MobileMenuButton from "./MobileMenuButton";
import { MdLock } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {};

function HomeNavbar({}: Props) {
  return (
    <nav className=" sticky top-0 z-10 h-[64px] border-b-[1px] border-homeborder backdrop-blur-lg">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div className=" flex items-center gap-5">
          <Link href={"/"}>
            <Image src="/whiteLogo.gif" width={30} height={30} alt="TrexUI" />
          </Link>
          <div className=" hidden gap-5 md:flex">
            {NavLinks.map((link) => {
              const Props = {
                Element: link.disabled ? "div" : Link,
              };
              return (
                <Props.Element key={link.link} href={link.link}>
                  <button
                    className=" flex items-center gap-1 transition duration-200 hover:text-hometextsecondary"
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    {link.name} {link.icon}
                  </button>
                </Props.Element>
              );
            })}
          </div>
        </div>
        <div className=" hidden md:flex">
          <AuthButton />
        </div>
        <MobileMenuButton links={NavLinks} />
      </div>
    </nav>
  );
}

export default HomeNavbar;

const NavLinks: NavLinks = [
  // {
  //     name: "Docs",
  //     link: "/docs",
  //     action: () => { },
  //     icon: <MdLock />,
  //     disabled: true
  // },
  {
    name: "Components",
    link: "/components",
    // icon: <MdKeyboardArrowDown size={20} />,
    action: () => {},
    disabled: false,
  },
  {
    name: "Blog",
    link: "/blog",
    action: () => {},
  },
  // {
  //   name: "Themes",
  //   link: "/themes",
  //   action: () => {},
  //   icon: <MdLock />,
  //   disabled: true,
  // },
];

export type NavLinks = {
  name: string;
  link: string;
  action: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}[];
