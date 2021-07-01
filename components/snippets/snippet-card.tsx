import Image from 'next/image';
import Link from 'next/link';

type SnippetCardProps = {
  snippet: {
    slug: string;
    title: string;
    desc: string;
  };
};

const SnippetCard = ({ snippet: { slug, title, desc } }: SnippetCardProps) => {
  const linkPath = `/snippets/${slug}`;
  return (
    <Link href={linkPath}>
      <a>
        <div className='border-2 border-black-dark rounded-sm p-4'>
          <Image
            src='/images/snippets/javascript.png'
            width={40}
            height={40}
            className='rounded-lg'
          />
          <h2 className='text-xl font-bold pt-2'>{title}</h2>

          <p className='text-md'>{desc}</p>
        </div>
      </a>
    </Link>
  );
};

export default SnippetCard;
