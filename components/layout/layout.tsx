import Header from './header';
import Sidebar from './sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className='pt-20 md:pl-40 md:pt-0'>{children}</main>
    </div>
  );
};

export default Layout;
