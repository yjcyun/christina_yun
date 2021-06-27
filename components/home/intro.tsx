import { motion } from 'framer-motion';

const variantsSentence = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.03,
    },
  },
};

const Intro: React.FC = () => {
  return (
    <section className='flex container mx-auto max-w-6xl px-8 xl:px-0 h-screen pb-3'>
      <div className='flex-1'>
        <div className='max-w-2xl flex flex-col h-full justify-end'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variantsSentence}
          >
            <h1 className='text-4xl lg:text-8xl font-extrabold mb-8'>
              Hi there,
              <br />
              I'm Christina, a frontend developer in Toronto.
            </h1>
          </motion.div>
        </div>
      </div>
      <div className='hidden md:flex'>
        {/* <Image
          src='/images/me.png'
          alt='Cartoonized version of Christina Yun'
          layout='intrinsic'
          width={300}
          height={300}
          className='shadow rounded-full max-w-full h-auto align-middle border-none'
        /> */}
      </div>
    </section>
  );
};
export default Intro;
