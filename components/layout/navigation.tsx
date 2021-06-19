import Link from 'next/link';

const navItems = [
  { label: 'Portfolio', link: '/portfolio' },
  { label: 'About', link: '/about' },
  { label: 'Snippets', link: '/snippets' },
];

const Navigation: React.FC = () => {
  return (
    <header className='container mx-auto max-w-5xl px-8 xl:px-0 flex justify-between items-center h-32'>
      <div className='font-bold uppercase'>christina yun</div>
      <nav>
        <ul className='flex'>
          {navItems.map((nav) => (
            <li className='ml-4 font-bold' key={nav.label}>
              <Link href={nav.link}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
