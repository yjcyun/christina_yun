import Image from 'next/image';
import SectionTitle from '../section-title';

const About = () => {
  return (
    <section className='bg-babypink'>
      <div className='container mx-auto max-w-5xl px-8 xl:px-0 py-40 relative'>
        <SectionTitle pretitle='about' title="Who's behind this site?" />
        <div className='flex'>
          <p>Hi there, I'm Christina, a frontend developer based in Toronto.</p>
          <Image
            src='/images/me.png'
            alt='Cartoonized version of Christina Yun'
            layout='intrinsic'
            width={300}
            height={370}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
