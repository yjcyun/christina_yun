import ProjectCard from '../components/projects/project-card';
import SectionTitle from '../components/section-title';

const ProjectsPage = () => {
  return (
    <div className='container mx-auto max-w-5xl px-8 xl:px-0 py-10'>
      <SectionTitle title='Projects' />

      <ProjectCard
        title='Instant Noodles'
        desc='Search for your favourite instant noodles and discover new flavours around the world'
        image='/something'
        live='google.com'
        github='github.com'
      />
      <ProjectCard
        title='Habit Builder'
        desc='Build healthy habits one at a time. Consistency is the key'
        image='/something'
        live='google.com'
        github='github.com'
        reverse
      />
      <ProjectCard
        title='Kismet'
        desc='Search for your favourite instant noodles and discover new flavours around the world'
        image='/something'
        live='google.com'
        github='github.com'
      />
    </div>
  );
};

export default ProjectsPage;
