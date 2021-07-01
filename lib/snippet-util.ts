import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const snippetDirectory = path.join(process.cwd(), 'snippets');

export const getSnippetFiles = () => {
  return fs.readdirSync(snippetDirectory);
};

export const getSnippetData = (snippetIdentifier: string) => {
  const snippetSlug = snippetIdentifier.replace(/\.md$/, '');
  const filePath = path.join(snippetDirectory, `${snippetSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const snippetData = {
    slug: snippetSlug,
    ...data,
    content,
  };
  return snippetData;
};

export const getAllSnippets = () => {
  const snippetFiles = getSnippetFiles();

  const allSnippets = snippetFiles.map((snippetFile) => {
    return getSnippetData(snippetFile);
  });

  return allSnippets;
};
