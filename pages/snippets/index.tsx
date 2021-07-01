import SectionTitle from '../../components/section-title';
import SnippetGrid from '../../components/snippets/snippet-grid';
import { getAllSnippets } from '../../lib/snippet-util';

export type SnippetsProps = {
  snippets: {
    content: string;
    desc: string;
    image: string;
    slug: string;
    title: string;
  }[];
};

const SnippetsPage = ({ snippets }: SnippetsProps) => {
  return (
    <div className='container mx-auto max-w-5xl px-8 xl:px-0 py-10'>
      <SectionTitle title='Snippets' />
      <h3 className='text-xl lg:text-2xl mb-16 dark:text-gray-light'>
        These are my collection of code snippets that I have saved.
      </h3>
      <SnippetGrid snippets={snippets} />
    </div>
  );
};

export const getStaticProps = () => {
  const allSnippets = getAllSnippets();

  return {
    props: {
      snippets: allSnippets,
    },
  };
};

export default SnippetsPage;
