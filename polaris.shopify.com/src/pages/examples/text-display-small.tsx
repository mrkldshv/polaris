import { Text } from "@shopify/polaris";
import React from "react";
import { withPolarisExample } from "../../components/PolarisExamplePage";

function TextExample() {
  return (
    <Text variant="displaySm" as="h1">
      Good evening, Dominic.
    </Text>
  );
}

export default withPolarisExample(TextExample);