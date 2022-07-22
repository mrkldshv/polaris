import yaml from "js-yaml";

export const parseMarkdown = (inputMarkdown) => {
  const readmeSections = inputMarkdown.split("---");
  const frontMatterSection = readmeSections[1];
  const readmeSection = readmeSections.slice(2).join("---");

  // Extract front matter
  const frontMatter = yaml.load(frontMatterSection);

  let markdown = readmeSection;

  // Add some custom HTML to <!-- dodont --> tags
  const dodontRegex = /<!-- (dodont) -->(.*?)<!-- end -->/gis;
  if (markdown.match(dodontRegex)) {
    markdown = markdown.replaceAll(dodontRegex, (match) => {
      const matchWithoutComments = match
        .replace(/^<!-- dodont -->/, "")
        .replace(/<!-- end -->$/, "");

      let i = 0;
      const matchWithColumns = matchWithoutComments.replaceAll(
        /#### ([^\n]+)/g,
        (match, captured) => {
          if (i === 1) {
            const type = match.startsWith("#### Don") ? "dont" : "do";

            return `</div><div class="dodont-part" data-type="${type}">\n\n#### ${captured}`;
          }
          i++;
          return match;
        }
      );

      const type = match.trim().startsWith("#### Don") ? "dont" : "do";

      return `<div class="dodont"><div class="dodont-part" data-type="${type}">${matchWithColumns}</div></div>`;
    });
  }

  const out = {
    frontMatter,
    readme: markdown,
  };

  return out;
};
