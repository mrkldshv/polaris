import type { NextPage } from "next";
import React from "react";
import TokensPage from "../../components/TokensPage";
import PageMeta from "../../components/PageMeta";
import Page from "../../components/Page";

const Components: NextPage = () => {
  return (
    <Page>
      <PageMeta title="Shape tokens" />

      <TokensPage tokenGroup={"shape"} />
    </Page>
  );
};

export default Components;
