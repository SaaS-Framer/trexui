import HomeLayout from "@/components/Layout/Layout";
import React from "react";

type Props = {};

function Index({}: Props) {
  return <div>Index</div>;
}

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
