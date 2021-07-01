import Image from 'next/image';

type SnippetHeaderType = {
  title: string;
  desc: string;
  image: string;
};

const SnippetHeader = ({ title, desc, image }: SnippetHeaderType) => {
  const imagePath = `/images/snippets/${image}`;

  return (
    <div className='flex justify-between'>
      <div>
        <h1 className='text-4xl font-extrabold'>{title}</h1>
        <p className='text-xl pt-4'>{desc}</p>
      </div>
      <Image
        src={imagePath}
        alt={title}
        width={70}
        height={70}
        layout='fixed'
        className='rounded-lg flex'
      />
    </div>
  );
};

export default SnippetHeader;
