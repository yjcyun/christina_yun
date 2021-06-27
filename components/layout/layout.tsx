import Navigation from './navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className='ml-32'>{children}</main>
    </div>
  );
};

export default Layout;
