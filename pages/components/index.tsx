import HomeLayout from "@/components/Layout/Layout";
import ComponentsFilers from "@/components/components/ComponentsFilers";
import ComponentsGrid from "@/components/components/ComponentsGrid";
import ComponentsLayout from "@/components/components/ComponentsLayout";
import Sidebar from "@/components/components/Sidebar";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";

function Index() {
  const router = useRouter();
  return <ComponentsLayout>{""}</ComponentsLayout>;
}

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
