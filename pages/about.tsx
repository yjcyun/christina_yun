import SectionTitle from '../components/section-title';
import ContentCont from '../components/about/content-cont';
import ListCont from '../components/about/list-cont';

const AboutPage = () => {
  return (
    <div className='container mx-auto max-w-5xl px-8 xl:px-0 py-10'>
      <SectionTitle title='about' />

      <h3 className='text-xl lg:text-2xl mb-16 dark:text-gray-light'>
        Hello, thank you for visiting my site. This is where I share my journey
        of becoming a frontend developer.
      </h3>

      <ContentCont emoji='👩‍💻' title='Who am I?'>
        <p className='paragraph'>
          My name is Christina Yun, and I am a Frontend Developer based in
          Toronto🍁. I have a BSc in Biological Science and a Diploma in
          Veterinary Technology. I spend most of day studying Javascript,
          playing with React, learning new tools, and drinking tea☕.
        </p>
      </ContentCont>

      <ContentCont emoji='🔥' title='What am I passionate about?'>
        <p className='paragraph'>
          I am amazed by how fast frontend technologies have evolved in the past
          year. I have witnessed an outpouring of new updates, tutorials, and
          articles on the internet. In keeping up with the latest industry
          standards, I have found that being a frontend developer is a
          never-ending learning journey. It feels incredibly good to learn
          something new each day.
        </p>
        <p className='paragraph'>
          I am passionate about bridging the gap between the design &
          engineering when creating world-class products that have lasting
          impact. I also enjoy being surrounded by people who are just as eager
          to learn from me, as I am from them.
        </p>
      </ContentCont>

      <ContentCont emoji='⚙️' title="What's in my toolbox?">
        <ul>
          {[
            'Javascript',
            'React, Gatsby, NextJS',
            'CSS, Sass, Styled-components',
            'Typescript',
            'Jest, RTL, Cypress',
            'Github Actions',
            'Node, Express',
            'MongoDB, Mongoose',
            'SQL',
          ].map((item, index) => (
            <ListCont key={index} item={item} />
          ))}
        </ul>
      </ContentCont>

      <ContentCont emoji='💗' title='Anything else?'>
        <p className='paragraph'>I am a dog person and I like Bahn mi.</p>
      </ContentCont>
    </div>
  );
};

export default AboutPage;
