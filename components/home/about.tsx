import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../section-title';

const About = () => {
  return (
    <section className='bg-babypink'>
      <div className='container mx-auto max-w-5xl px-8 xl:px-0 pt-36 pb-24 relative'>
        <div className='flex'>
          <div className='flex justify-end relative -mt-4'>
            <Image
              src='/images/me.png'
              alt='Cartoonized version of Christina Yun'
              layout='intrinsic'
              width={300}
              height={370}
            />
            <div className='absolute top-26 right-12 transform -rotate-12'>
              <Image
                src='/images/sunglasses.gif'
                alt='Animation of stars glittering'
                layout='fixed'
                width={150}
                height={100}
              />
            </div>
          </div>
          <div className='ml-16 relative'>
            <SectionTitle
              pretitle='check out'
              title='My favorite things:'
              justify='left'
            ></SectionTitle>
            <ul className='max-w-xl mb-8'>
              <li className='text-3xl font-bold'>The Office.</li>
              <li className='text-3xl font-bold'>Vegan Bánh mì.</li>
              <li className='text-3xl font-bold'>Brandon Sanderson.</li>
              <li className='text-3xl font-bold'>Bronte Creek.</li>
              <li className='text-3xl font-bold'>ReactJS.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
