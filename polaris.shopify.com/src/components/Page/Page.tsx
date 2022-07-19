import React from "react";
import Image from "next/image";
import useDarkMode from "use-dark-mode";

import Header from "../Header";

import styles from "./Page.module.scss";
import SiteLaunchBanner from "../SiteLaunchBanner";
import HTMLHead from "../HTMLHead";

interface Props {
  children: React.ReactNode;
}

function Page({ children }: Props) {
  const darkMode = useDarkMode(false);

  return (
    <>
      <HTMLHead />
      <Header darkMode={darkMode} />

      {children}

      <div className={styles.Footer}>
        <Image
          src="/shopify-logo.svg"
          width={36}
          height={36}
          alt="Shopify logo"
        />
        <SiteLaunchBanner />
      </div>
    </>
  );
}

export default Page;
