import React from 'react';
import Link from "next/link";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import Devimg from "./Devimg";
import Socials from "./Socials";
import Badge from './Badge';
import {Button} from './ui/button';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
            {/* text */}
            <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0'>
                <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]' >Web Developer</div>
                <h1 className='h1 mb-4'>Hello, My Name is Rajkumar</h1>
                <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>I am a full-stack developer with</p>
                {/* Buttons */}
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                  <Link href='/contact'>
                    <Button className="gap-x-2">
                    Contact me <Send size={18} />
                    </Button>
                  </Link>
                  <Button variant="secondary" className="gap-x-2">
                    Download CV <Download size={18} />
                    </Button>
                </div>
                {/* Socials Media */}
                <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'  />
            </div>
            {/* Image */}
            <div className='hidden xl:flex relative'>Image</div>
        </div>
        <div className='hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
