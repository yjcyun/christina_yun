import Image from 'next/image';
import Link from 'next/link';

const Intro: React.FC = () => {
  return (
    <section className='flex w-full container mx-auto max-w-5xl px-8 xl:px-0 pt-10 pb-16'>
      <div className='flex-1'>
        <div className='md:max-w-md flex flex-col h-full justify-center'>
          <p className='font-cursive transform -rotate-6 -translate-y-5 text-2xl'>
            Hi, I'm Christina
          </p>
          <h1 className='text-4xl lg:text-6xl font-extrabold mb-8'>
            A Frontend Developer.
          </h1>
          <p className='text-xl'>
            I'm like building websites, learning new technologies and drinking
            tea. Feel free to browse around and leave a message on my guestbook.
          </p>
          <div className='mt-8'>
            <Link href='/about'>
              <button className='rounded py-4 px-8 bg-pink'>See my work</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden md:flex flex-1 ml-8'>
        <Image
          src='/images/laptop-light.svg'
          alt='Illustration of a laptop and a cup of tea'
          layout='intrinsic'
          width={600}
          height={400}
        ></Image>
      </div>
    </section>
  );
};

export default Intro;
