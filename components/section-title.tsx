type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='border-b-4 border-black-dark dark:border-gray mb-8'>
      <div className='border-4 border-b-0 border-black-dark dark:border-gray capitalize py-1 px-3 inline-flex text-2xl font-bold'>
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;
