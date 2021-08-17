import { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavItem:FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string
}> = ({activeItem, name, route, setActiveItem}) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className="hover:text-purple-600">{name}</span>
        </a>
      </Link>
    ): null
  )
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const {pathname} = useRouter()

  useEffect(() => {
    if(pathname === '/')setActiveItem('About')
    if(pathname === '/projects')setActiveItem('Projects')
    if(pathname === '/resume')setActiveItem('Resume')
  }, []);

  return(
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-purple-500 border-b-4 border-purple-500 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg text-blue-600">
        <NavItem 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          name='About' 
          route='/'
        />
        <NavItem 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          name='Projects' 
          route='/projects'
        />
        <NavItem 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          name='Resume' 
          route='/resume'
        />
      </div>
    </div>
  )
};

export default Navbar;