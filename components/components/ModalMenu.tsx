import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../Layout/Navbar";
import Link from "next/link";

type Props = {
  isMenuOpen: boolean;
  closeMenu: () => void;
  links: NavLinks;
};

function ModalMenu({ isMenuOpen, closeMenu, links }: Props) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-[#000]"
          exit={{ opacity: 0 }}
        >
          {links.map((link, index) => {
            const Props = {
              Element: link.disabled ? "div" : Link,
            };
            return (
              <Props.Element key={link.link} href={link.link}>
                <div
                  className="cursor-pointer text-5xl font-extrabold text-[#fff]
                          transition-all duration-500 ease-in-out hover:text-green-400
                          "
                  key={index}
                  onClick={() => {
                    if (index === 0) {
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 100);
                    }
                    closeMenu();
                  }}
                >
                  {link.name}
                </div>
              </Props.Element>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalMenu;
