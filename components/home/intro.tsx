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

const Intro = () => {
  return (
    <section className='flex sidebar-height md:h-screen pb-5'>
      <div className='flex-1'>
        <div className='max-w-3xl flex flex-col h-full justify-center md:justify-end'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variantsSentence}
          >
            <h1 className='text-4xl lg:text-8xl font-extrabold uppercase mb-8'>
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
