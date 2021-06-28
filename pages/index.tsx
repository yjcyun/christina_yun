import Intro from '../components/home/intro';
import Projects from '../components/home/projects';

const Home = () => {
  return (
    <div className='container mx-auto max-w-5xl px-8 xl:px-0'>
      <Intro />
      <Projects />
    </div>
  );
};

export default Home;
