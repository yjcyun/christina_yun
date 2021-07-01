import { getAllSnippets } from '../../lib/snippet-util';
import { SnippetsProps } from '../../pages/snippets';
import SnippetCard from './snippet-card';

const SnippetGrid = ({ snippets }: SnippetsProps) => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      {snippets.map((snippet) => (
        <SnippetCard snippet={snippet} key={snippet.slug} />
      ))}
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

export default SnippetGrid;
