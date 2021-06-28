import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../section-title';
import ProjectCard from '../projects/project-card';

const Projects: React.FC = () => {
  return (
    <section className='mt-72'>
      <ProjectCard
        title='Instant Noodles'
        desc='Search for your favourite instant noodles and discover new flavours around the world'
        image='/something'
        live='google.com'
        github='github.com'
      />
      <ProjectCard
        title='Hello asdfa df '
        desc='Search for your favourite instant noodles and discover new flavours around the world'
        image='/something'
        live='google.com'
        github='github.com'
        reverse
      />
      <ProjectCard
        title='Hello asdfa df '
        desc='Search for your favourite instant noodles and discover new flavours around the world'
        image='/something'
        live='google.com'
        github='github.com'
      />
    </section>
  );
};

export default Projects;
