import fs from 'fs/promises';
import path from 'path';
import Head from 'next/head';

import ProjectCard from '../components/projects/project-card';
import SectionTitle from '../components/section-title';

export type ProjectsPageType = {
  projects: {
    id: number;
    title: string;
    desc: string;
    imgUrl: string;
    live: string;
    github: string;
    featured: boolean;
  }[];
};

const ProjectsPage = ({ projects }: ProjectsPageType) => {
  return (
    <>
      <Head>
        <title>Projects - Christina Yun | Frontend Developer | Toronto</title>
        <meta
          name='description'
          content='Projects/Portfolio. Frontend Developer. Javascript and React enthuasiast.'
        />
      </Head>
      <div className='mx-auto min-h-screen max-w-5xl px-8 xl:px-0 py-9'>
        <SectionTitle title='Projects' />
        {projects.map(({ id, title, desc, imgUrl, live, github, featured }) => (
          <ProjectCard
            key={id}
            title={title}
            desc={desc}
            image={imgUrl}
            live={live}
            github={github}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');

  const jsonData = await fs.readFile(filePath);
  // @ts-ignore
  const data = JSON.parse(jsonData);

  return {
    props: {
      projects: data.projects,
    },
  };
};

export default ProjectsPage;
