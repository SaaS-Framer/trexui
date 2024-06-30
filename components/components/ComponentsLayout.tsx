import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  initData?: any;
};

function ComponentsLayout({ children, initData }: Props) {
  return (
    <div className=" container mx-auto flex">
      <Sidebar initData={initData}/>
      {children}
    </div>
  );
}

export default ComponentsLayout;
