interface ReplacementValues {
  [key: string]: string;
}

export const createRegex = (replacementValues: ReplacementValues) =>
  new RegExp(
    Object.keys(replacementValues)
      // escape brackets or other things
      .map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|'),
    'g',
  );
