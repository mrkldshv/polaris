import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";

import SiteLaunchBanner from "../SiteLaunchBanner";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

function Page({ children }: Props) {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "color-scheme",
      darkMode.value ? "dark" : "light"
    );
  }, [darkMode.value]);

  return (
    <>
      <HTMLHead />
      <Header darkMode={darkMode} />
      {children}
      <SiteLaunchBanner />
    </>
  );
}

export default Page;
