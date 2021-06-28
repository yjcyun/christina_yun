type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className='text-lg font-bold mr-4 py-3 px-6 transition-all relative buttonAfter bg-purple'
      data-content={children}
    >
      {children}
    </button>
  );
};

export default Button;
