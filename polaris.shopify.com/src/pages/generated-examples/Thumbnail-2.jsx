import { AppProvider, Thumbnail } from "@shopify/polaris";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <Thumbnail
  source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
  size="small"
  alt="Black choker necklace"
/>
      </div>
    </AppProvider>
  );
}

export default Example;
    