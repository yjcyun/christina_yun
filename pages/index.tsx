import Head from 'next/head';

import Intro from '../components/home/intro';

const Home = () => {
  return (
    <>
      <Head>
        <title>Christina Yun | Frontend Developer | Toronto</title>
        <meta
          name='description'
          content='Frontend Developer. Javascript and React enthuasiast.'
        />
      </Head>
      <div className='container mx-auto w-full max-w-5xl px-8 xl:px-0'>
        <Intro />
      </div>
    </>
  );
};

export default Home;
