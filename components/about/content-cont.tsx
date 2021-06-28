type ContentContType = {
  emoji: string;
  title: string;
  children: React.ReactNode;
};

const ContentCont = ({ emoji, title, children }: ContentContType) => {
  return (
    <div className='mb-16'>
      <h3 className='text-2xl md:text-3xl font-bold mb-8' data-content={title}>
        <span role='img' aria-label='woman'>
          {emoji}
        </span>{' '}
        {title}
      </h3>
      {children}
    </div>
  );
};

export default ContentCont;
