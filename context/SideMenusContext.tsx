import { apikeys } from "@/config/apikeys";
import { SideMenuOption, SideMenuOptionCategory } from "@/types/MenuType";
import React, { useState, createContext, useEffect } from "react";

const SideMenusContext = createContext<{
  sideMenus: SideMenuOption[];
}>({
  sideMenus: [],
});

const SideMenusProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenus, setSideMenus] = useState<SideMenuOption[]>([]);

  useEffect(() => {
    const getMenus = async () => {
      const res = await fetch(`${apikeys.apiUrl}componentscategories`);
      const data = await res.json();
      setSideMenus(data ? data : []);
    };
    getMenus();
  }, []);
  return (
    <SideMenusContext.Provider
      value={{
        sideMenus,
      }}
    >
      {children}
    </SideMenusContext.Provider>
  );
};

export { SideMenusContext, SideMenusProvider };
