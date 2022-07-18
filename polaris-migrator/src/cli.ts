import fs from 'fs';

import meow from 'meow';
import globby from 'globby';

import {replaceSassSpacing} from './migrations';

const cli = meow(
  `
	Usage
	  $ polaris-migrator <migration> <path>
	Examples
	  $ polaris-migrator replace-sass-spacing src/components/**/*.scss
`,
);

const migrations = {
  'replace-sass-spacing': replaceSassSpacing,
};

type Migration = keyof typeof migrations;

const runMigration = (
  filePath: string,
  migrationFunction: (fileContent: string) => string,
) => {
  const oldContent = fs.readFileSync(filePath, 'utf-8');
  const newContent = migrationFunction(oldContent);

  // eslint-disable-next-line no-console
  console.log('Writing file:', filePath);
  // eslint-disable-next-line no-console
  console.log(newContent);

  // fs.writeFileSync(filePath, newContent);
};

const polarisMigrator = async (migration: Migration, pathGlob: string) => {
  if (!migrations[migration]) {
    throw new Error(`No migration found for ${migration}`);
  }

  if (!pathGlob) throw new Error(`No path provided for migration`);

  const filepaths = globby.sync(pathGlob, {absolute: true});
  if (filepaths.length === 0) {
    throw new Error(`No files found for ${pathGlob}`);
  }

  await Promise.all(
    filepaths.map((filepath) => runMigration(filepath, migrations[migration])),
  );
};

export async function run() {
  try {
    await polarisMigrator(cli.input[0] as Migration, cli.input[1]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
}
