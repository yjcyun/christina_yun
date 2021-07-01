import SnippetDetail from '../../components/snippets/snippet-detail';
import { getSnippetData, getSnippetFiles } from '../../lib/snippet-util';

export type SnippetDetailPageProps = {
  snippet: {
    content: string;
    desc: string;
    image: string;
    slug: string;
    title: string;
  };
};

type Params = {
  params: {
    slug: string;
  };
};

const SnippetDetailPage = ({ snippet }: SnippetDetailPageProps) => {
  return (
    <div className='container mx-auto max-w-5xl px-8 xl:px-0 py-10'>
      <SnippetDetail snippet={snippet} />
    </div>
  );
};

export const getStaticProps = ({ params }: Params) => {
  const { slug } = params;

  const snippetData = getSnippetData(slug);

  return {
    props: {
      snippet: snippetData,
    },
  };
};

export const getStaticPaths = () => {
  const snippetFilenames = getSnippetFiles();

  const slugs = snippetFilenames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default SnippetDetailPage;
