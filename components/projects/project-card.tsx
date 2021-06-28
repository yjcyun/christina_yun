import Image from 'next/image';
import Button from '../button';

type ProjectCardProps = {
  title: string;
  desc: string;
  image: string;
  live: string;
  github: string;
  reverse?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  image,
  live,
  github,
}) => {
  return (
    <div className='flex mb-40 lg:mb-48'>
      <div className='h-fit-content w-full flex justify-between items-center flex-col lg:flex-row'>
        <div className='w-full lg:w-3/5'>
          <h3 className='relative max-w-sm'>
            <span className='text-5xl lg:text-7xl font-bold flex-1 uppercase text-stroke'>
              {title}
            </span>
            <span className='text-5xl lg:text-7xl font-bold flex-1 uppercase bottom-1 left-1 absolute text-purple'>
              {title}
            </span>
          </h3>
          <div className='w-auto h-auto lg:ml-8'>
            <a href={live}>
              <Image
                src='/images/projects/project1.jpg'
                alt='Illustration of a laptop and a cup of tea'
                layout='intrinsic'
                width={800}
                height={450}
              />
            </a>
          </div>
        </div>
        <div className='lg:w-2/5 lg:ml-16 lg:self-end w-full'>
          <p className='text-xl lg:text-3xl my-10 lg:mb-16 dark:text-gray-light'>
            {desc}
          </p>
          <div className='flex'>
            <a href={github}>
              <Button>Github</Button>
            </a>
            <a href={live}>
              <Button>Live</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
