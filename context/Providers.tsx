import React from "react";
import { SideMenusProvider } from "./SideMenusContext";
import { ToastProvider } from "./ToastProvider";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <ToastProvider>
      {/* <SideMenusProvider> */}
        {children}
      {/* </SideMenusProvider> */}
    </ToastProvider>
  );
}

export default Providers;
