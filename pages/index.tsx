import fs from 'fs/promises';
import path from 'path';

import Intro from '../components/home/intro';
import FeaturedProjects from '../components/home/featured-projects';
import { ProjectsPageType } from './projects';

const Home = ({ projects }: ProjectsPageType) => {
  return (
    <div className='container mx-auto max-w-5xl px-8 xl:px-0'>
      <Intro />
      <FeaturedProjects projects={projects} />
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      projects: data.projects,
    },
  };
};

export default Home;
