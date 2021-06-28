import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MobileNavigation from './mobile-navigation';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='w-full max-h-20 flex justify-between fixed px-8 py-4 bg-white-dark md:bg-transparent z-50'>
      <Link href='/'>
        <a href='' className='cursor=pointer'>
          <Image src='/images/logo.png' width={100} height={60} />
        </a>
      </Link>
      <div
        className='flex items-center md:hidden cursor-pointer z-30'
        onClick={() => setNavOpen(!navOpen)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      {<MobileNavigation navOpen={navOpen} setNavOpen={setNavOpen} />}
    </header>
  );
};

export default Header;
