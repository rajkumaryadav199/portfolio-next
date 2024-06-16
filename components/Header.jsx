'use client';

import ThemeToggler from '../app/ThemeToggler';
import Logo from "../components/Logo";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { usePathname } from 'next/navigation';
import { useEffect , useState} from 'react';

const Header = () => {
  const [header, setHeader] = useState(false);
  const path = usePathname();

  useEffect(()=>{
    const scrollYPos = window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setHeader(true):setHeader(false);
    })
    return window.addEventListener('scroll', scrollYPos)
  })
  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent':'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${path === '/' && 'bg-[#fef9f5'}`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo/>
          <div className='flex items-center gap-x-8'>
            {/* nav */}
            <Navbar 
              containerStyles='hidden xl:flex gap-x-8 items-center' 
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-8 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* Mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
