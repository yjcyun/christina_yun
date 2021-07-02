import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MobileNavigation from './mobile-navigation';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='w-full max-h-36 flex justify-between fixed px-8 py-4 md:py-9 bg-white-dark dark:bg-black-lighter md:dark:bg-transparent md:bg-transparent z-50'>
      <Link href='/'>
        <a className='cursor-pointer text-2xl font-bold border border-black-lighter dark:border-white-dark p-2 rounded w-12 h-12 text-center'>
          Y
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
