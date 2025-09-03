"use client";

import { Link } from 'lucide-react';
import React from 'react';
import { RiLinkedinFill, RiYoutubeFill, RiGithubFill,RiFacebookFill, RiTwitterFill } from 'react-icons/ri';

const Socials = ({containerStyles, iconsStyles}) => {
  const icons = [
    {
      path:'/youtube',
      name:<RiYoutubeFill />
    },
    {
      path:'/linkedin',
      name:<RiLinkedinFill />
    },
    {
      path:'/github',
      name:<RiGithubFill />
    },
    {
      path:'/twitter',
      name:<RiTwitterFill />
    },
  ]
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icons, index)=>{
          return<Link href={`${icons.path}`} key={index}>
            <div className={`${iconsStyles}`}>{icons.name}</div>
          </Link>
        })
      }
    </div>
  )
}

export default Socials;
