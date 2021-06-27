import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Portfolio', link: '/portfolio' },
  { label: 'About', link: '/about' },
  { label: 'Snippets', link: '/snippets' },
];

const Navigation: React.FC = () => {
  return (
    <header className='w-36 flex-col items-center h-screen fixed px-4 pt-4'>
      <Link href='/'>
        <a href='' className='cursor=pointer'>
          <Image src='/images/logo.png' width={100} height={60} />
        </a>
      </Link>
      <nav>
        <ul className='flex flex-col'>
          {navItems.map((nav) => (
            <li className=' font-bold text-2xl' key={nav.label}>
              <Link href={nav.link}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
