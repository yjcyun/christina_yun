import Image from 'next/image';

type PortfolioCardProps = {
  title: string;
  desc: string;
  image: string;
  live: string;
  github: string;
  reverse?: boolean;
};
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  desc,
  image,
  live,
  github,
}) => {
  return (
    <div className='content-height flex items-center'>
      <div className='h-80vh w-full flex justify-between items-center'>
        <div className='w-3/5'>
          <div className='w-auto h-auto border-8 border-navy mr-20'>
            <a href=''>
              <Image
                src='/images/projects/project1.jpg'
                alt='Illustration of a laptop and a cup of tea'
                layout='intrinsic'
                width={600}
                height={350}
              />
            </a>
          </div>
        </div>
        <div className='w-2/5  ml-16'>
          <h3 className='text-7xl font-bold flex-1 uppercase text-shadow'>
            {title}
          </h3>
          <p className='text-3xl  mt-10 mb-16'>{desc}</p>
          <div>
            <a
              href={github}
              className='text-lg font-bold mr-4 border-4 border-darknavy py-3 px-6'
            >
              Github
            </a>
            <a
              href={live}
              className='text-lg font-bold mr-4 border-4 border-darknavy py-3 px-6 bg-darknavy text-beige1'
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
