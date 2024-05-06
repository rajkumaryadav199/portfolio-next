'use client';

import ThemeToggler from '../app/ThemeToggler';
import Logo from "../components/Logo";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <Logo/>
        <div className='flex items-center gap-x-6'>
          {/* nav */}
          <Navbar containerStyles='hidden xl:flex gap-x-8 items-center' 
          linkStyles='relative hover:text-primary transition-all'
          underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
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
