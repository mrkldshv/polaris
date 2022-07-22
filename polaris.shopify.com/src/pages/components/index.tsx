import { GetStaticProps } from "next";
import glob from "glob";
import fs from "fs";
import { parseMarkdown } from "../../utils/markdown.mjs";

import { slugify } from "../../utils/various";
import { Status } from "../../types";
import ComponentGrid from "../../components/ComponentGrid";
import Layout from "../../components/Layout";
// import styles from "./ComponentsPage.module.scss";
import PageMeta from "../../components/PageMeta";

interface Props {
  components: any;
  categories: string[];
}

const ComponentsIndex = ({ components, categories }: Props) => {
  return (
    // <div className={styles.ComponentsPage}>
    <div>
      <PageMeta
        title="Components"
        description="Components are reusable building blocks made of interface elements and styles, packaged through code. Piece them together, improve them, and create new ones to solve merchant problems."
      />

      {/* <Layout navItems={componentNav} showTOC={false}> */}
      <Layout showTOC={false}>
        <h1>Components</h1>

        {categories.map((category) => {
          return (
            <div key={category}>
              {/* <div key={category} className={styles.Category}> */}
              <h2>{category}</h2>
              {/* <h2 className={styles.CategoryName}>{category}</h2> */}
              <ComponentGrid>
                {components
                  .filter(
                    (component) => component.frontMatter.category === category
                  )
                  .map(({ frontMatter, intro }) => {
                    const { name, status } = frontMatter;
                    const url = `/components/${slugify(name)}`;
                    let typedStatus = status
                      ? {
                          value: status.value.toLowerCase() as Status["value"],
                          message: status.value,
                        }
                      : undefined;

                    return (
                      <ComponentGrid.Item
                        key={name}
                        name={name}
                        description={intro}
                        url={url}
                        status={typedStatus}
                      />
                    );
                  })}
              </ComponentGrid>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

const getMarkdown = async (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const parsedContent = parseMarkdown(fileContent);

  return fileContent;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const componentFiles = glob.sync("content/components/*.md");
  const fetchComponents = componentFiles.map((filePath) =>
    getMarkdown(filePath)
  );
  const components = await Promise.all(fetchComponents);

  console.log(components[0]);

  return {
    props: {
      categories: [],
      components: {},
    }, // will be passed to the page component as props
  };
};

export default ComponentsIndex;
