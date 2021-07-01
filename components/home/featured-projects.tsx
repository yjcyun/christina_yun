import { ProjectsPageType } from '../../pages/projects';
import ProjectCard from '../projects/project-card';

const FeaturedProjects = ({ projects }: ProjectsPageType) => {
  return (
    <section className='mt-72'>
      {projects
        .filter((project) => project.featured)
        .map(({ id, title, desc, imgUrl, live, github }) => (
          <ProjectCard
            key={id}
            title={title}
            desc={desc}
            image={imgUrl}
            live={live}
            github={github}
          />
        ))}
    </section>
  );
};

export default FeaturedProjects;
