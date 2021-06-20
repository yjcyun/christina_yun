import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../section-title';
import PortfolioCard from '../portfolio/portfolio-card';

const Portfolio: React.FC = () => {
  return (
    <section className='bg-beige1'>
      <div className='container mx-auto max-w-5xl px-8 xl:px-0 pt-40 pb-24 relative'>
        <SectionTitle
          pretitle='portfolio'
          title="Here's some of what I've built."
        >
          <div className='absolute bottom-10 right-0'>
            <Image
              src='/images/stars.gif'
              alt='Animation of stars glittering'
              layout='fixed'
              width={150}
              height={70}
            />
          </div>
        </SectionTitle>
        <div className='grid grid-cols-2 gap-6 mt-16'>
          <PortfolioCard
            title='Hello'
            image='/something'
            builtwith={['NextJS', 'TailwindCSS']}
            live='google.com'
            github='github.com'
            id={1}
          />
          <PortfolioCard
            title='Hello'
            image='/something'
            builtwith={['NextJS', 'TailwindCSS']}
            live='google.com'
            github='github.com'
            id={1}
          />
        </div>
        <div className='mt-16 text-center'>
          <Link href='/portfolio'>
            <button className='py-4 px-8 bg-pink'>View More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
