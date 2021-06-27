import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../section-title';
import PortfolioCard from '../portfolio/portfolio-card';

const Portfolio: React.FC = () => {
  return (
    <section className='bg-beige1'>
      <div className='container mx-auto max-w-6xl px-8 xl:px-0'>
        <div className='mt-16'>
          <PortfolioCard
            title='Instant Noodles'
            desc='Search for your favourite instant noodles and discover new flavours around the world'
            image='/something'
            live='google.com'
            github='github.com'
          />
          <PortfolioCard
            title='Hello asdfa df '
            desc='Search for your favourite instant noodles and discover new flavours around the world'
            image='/something'
            live='google.com'
            github='github.com'
            reverse
          />
          <PortfolioCard
            title='Hello asdfa df '
            desc='Search for your favourite instant noodles and discover new flavours around the world'
            image='/something'
            live='google.com'
            github='github.com'
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
