import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const navItems = [
  { label: 'Projects', link: '/projects' },
  { label: 'About', link: '/about' },
];

const Menu = () => {
  const router = useRouter();

  return (
    <div>
      {navItems.map((nav) => (
        <li
          className={`${
            router.pathname === nav.link ? 'active' : ''
          } transition-all font-semibold text-2xl hover:text-purple`}
          key={nav.label}
        >
          <Link href={nav.link}>{nav.label}</Link>
        </li>
      ))}
    </div>
  );
};

export default Menu;
