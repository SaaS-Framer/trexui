import React from "react";

type Props = {
  children: React.ReactNode;
};

function ComponentsCodeWrapper({ children }: Props) {
  return <div>{children}</div>;
}

export default ComponentsCodeWrapper;
