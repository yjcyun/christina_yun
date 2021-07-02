import { useEffect } from 'react';

import Contact from './contact';
import Menu from './menu';

type MobileNavigationProps = { navOpen: boolean; setNavOpen: any };

const MobileNavigation = ({ navOpen, setNavOpen }: MobileNavigationProps) => {
  useEffect(() => {
    navOpen && (document.body.style.overflow = 'hidden');
    !navOpen && (document.body.style.overflow = '');
  }, [navOpen]);

  return (
    <div
      className={`fixed w-screen top-20 bottom-0 right-0 left-0 h-screen backdrop-filter backdrop-blur transform ${
        navOpen ? 'translate-x-0' : 'translate-x-100vw'
      } transition-all`}
      onClick={() => setNavOpen(false)}
    >
      <div
        className={`fixed max-w-400 w-8/12 -top-20 bottom-0 right-0 h-screen bg-white-dark dark:bg-black-lighter z-20  shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col mt-20 items-center justify-between text-center sidebar-height py-10'>
          <ul className='flex flex-col'>
            <Menu />
          </ul>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
