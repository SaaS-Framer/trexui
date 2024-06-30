import React from "react";
import TextLogo from "../Ui/TextLogo";

type Props = {};

function HomeFooter({}: Props) {
  return (
    <div className=" flex  items-center justify-between border-b-[1px] border-t-[1px] border-homeborder py-2 md:py-5">
      <div>
        <TextLogo color={"#f1f1f1df"} className={" w-16 md:w-24"} />
        <div className=" md:tect-base my-1 text-sm md:my-3">
          © 2023 TrexUI, Inc. All rights reserved.
        </div>
      </div>
      {/* <div>234234</div> */}
    </div>
  );
}

export default HomeFooter;
