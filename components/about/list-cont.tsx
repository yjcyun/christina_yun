type ListContType = {
  item: string;
};

const ListCont = ({ item }: ListContType) => {
  return (
    <li className='my-2 text-xl md:text-2xl dark:text-gray-light'>
      <span className='thick-underline'>{item}</span>
    </li>
  );
};

export default ListCont;
