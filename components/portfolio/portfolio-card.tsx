import Image from 'next/image';

type PortfolioCardProps = {
  title: string;
  image: string;
  builtwith: string[];
  live: string;
  github: string;
  id: number;
};
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  image,
  builtwith,
  live,
  github,
  id,
}) => {
  return (
    <div className='bg-beige2'>
      <div className='p-6'>
        <div className='flex justify-between items-center'>
          <h3 className='text-3xl font-bold'>{title}</h3>
          <div>
            <a href={github} className='ml-4'>
              Github
            </a>
            <a href={live} className='ml-4'>
              Live
            </a>
          </div>
        </div>

        <div>
          <Image
            src='/images/projects/design.png'
            alt='Illustration of a laptop and a cup of tea'
            layout='intrinsic'
            width={600}
            height={450}
          />
        </div>

        <div>
          <h4 className='font-bold mb-2'>Tools Used</h4>
          <div className='flex'>
            {builtwith.map((stack) => (
              <span
                className='py-1 px-2 rounded-sm bg-navy font-semibold text-babypurple mr-2'
                key={stack}
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
