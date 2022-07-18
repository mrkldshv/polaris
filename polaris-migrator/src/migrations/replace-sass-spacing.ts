import {createRegex} from '../utilities';

export function replaceSassSpacing(fileContent: string) {
  const spacingReplacements = {
    'spacing(none)': 'var(--p-space-0)',
    'spacing(extra-tight)': 'var(--p-space-1)',
    'spacing(tight)': 'var(--p-space-2)',
    'spacing(base-tight)': 'var(--p-space-3)',
    'spacing()': 'var(--p-space-4)',
    'spacing(base)': 'var(--p-space-4)',
    'spacing(loose)': 'var(--p-space-5)',
    'spacing(extra-loose)': 'var(--p-space-8)',
  };

  const newContent = fileContent.replace(
    createRegex(spacingReplacements),
    (value) => spacingReplacements[value as keyof typeof spacingReplacements],
  );

  return newContent;
}
