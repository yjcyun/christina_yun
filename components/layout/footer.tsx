const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto max-w-5xl px-8 xl:px-0 py-8'>
        <p className='font-cursive text-xl'>
          💖 Thank you for scrolling all the way down!
        </p>
        <div className='flex justify-between'>
          <p>Made with power of rice 🍚💪</p>
          <div>
            <a href='/'>Github</a>
            <a href='/' className='ml-4'>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
