import Link from "next/link";
import React, { memo, useContext, useMemo } from "react";
import TextLogo from "../Ui/TextLogo";
import { useRouter } from "next/router";
// import { SideMenusContext } from "@/context/SideMenusContext";
import { SideMenuOption, SideMenuOptionCategory } from "@/types/MenuType";

function Sidebar({
  initData
}:{
  initData: SideMenuOption[]
}) {
  const router = useRouter();
  const { slug } = router.query;
  // const { sideMenus } = useContext(SideMenusContext);
  const [filteredData, setFilteredData] =
    React.useState<SideMenuOption[]>(initData);

  const totalCount = useMemo(() => {
    setFilteredData(initData);
    return initData?.reduce((acc: number, menu: SideMenuOption) => {
      return (
        acc +
        menu?.categories?.reduce((acc: number, category) => {
          return acc + category.count;
        }, 0)
      );
    }, 0);
  }, [initData]);

  return (
    <aside className=" hidden min-h-[calc(100vh-64px)] min-w-[280px] border-r-2 border-homeborder pr-5 pt-5 md:block">
      <div className=" mb-5 w-full rounded-3xl border-2 border-homeborder bg-[#F9FAFB09] px-3 py-1">
        <input
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              const filtered = initData.filter((menu) => {
                return menu.categories.some((category) =>
                  category.category.toLowerCase().includes(value.toLowerCase())
                );
              });
              setFilteredData(filtered);
            } else {
              setFilteredData(initData);
            }
          }}
          type="text"
          placeholder="Search"
          className=" w-full bg-transparent text-sm text-gray-300 outline-none"
        />
      </div>
      <Link href={"/components/category/all"}>
        <Button count={totalCount} name={"All"} enabled={slug == "all"} />
      </Link>
      {filteredData?.map((menu: SideMenuOption) => {
        return (
          <React.Fragment key={menu._id}>
            <div className=" flex h-[40px] items-center px-3  text-sm font-medium  text-white">
              {menu._id}
            </div>
            {menu?.categories?.map(
              ({ category, count }: { category: string; count: number }) => {
                return (
                  <Link
                    href={`/components/category/${category.toLowerCase()}`}
                    key={category}
                  >
                    <Button
                      name={category}
                      count={count}
                      enabled={slug == category.toLowerCase()}
                    />
                  </Link>
                );
              }
            )}
          </React.Fragment>
        );
      })}
    </aside>
  );
}

export default memo(Sidebar);

const Button = ({
  name,
  enabled = false,
  count = 0,
}: {
  name: string;
  enabled?: boolean;
  count?: number;
}) => {
  return (
    <div
      className={`${
        enabled && "bg-[#E0F3FF0D] text-[#f9fafbcf]"
      } text-gray-00 my-2 flex h-[40px] w-full  transform  items-center rounded-xl px-5 text-sm font-semibold transition  duration-200 ease-in-out hover:bg-[#E0F3FF1f] hover:text-[#f9fafbcf]`}
    >
      {name} <span className=" ml-1 text-xs font-bold">({count})</span>
    </div>
  );
};
