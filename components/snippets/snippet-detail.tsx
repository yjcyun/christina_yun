import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { SnippetDetailPageProps } from '../../pages/snippets/[slug]';

import SnippetHeader from './snippet-header';

const SnippetDetail = ({ snippet }: SnippetDetailPageProps) => {
  const customRenderers = {
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <>
      <SnippetHeader
        title={snippet.title}
        desc={snippet.desc}
        image={snippet.image}
      />
      <ReactMarkdown components={customRenderers}>
        {snippet.content}
      </ReactMarkdown>
    </>
  );
};

export default SnippetDetail;
