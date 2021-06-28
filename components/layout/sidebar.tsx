import Contact from './contact';
import Menu from './menu';
import ThemeToggle from './theme-toggle';

const Sidebar = () => {
  return (
    <nav className='w-40 hidden md:flex flex-col justify-between sidebar-height fixed px-8 py-4 mt-20'>
      <ul className='flex flex-col mt-4'>
        <Menu />
      </ul>
      <div>
        <Contact />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Sidebar;
