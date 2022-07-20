import React from "react";

import SiteLaunchBanner from "../SiteLaunchBanner";
import Header from "../Header";
import HTMLHead from "../HTMLHead";

interface Props {
  children: React.ReactNode;
}

function Page({ children }: Props) {
  return (
    <>
      <HTMLHead />
      <Header />
      {children}
      <SiteLaunchBanner />
    </>
  );
}

export default Page;
