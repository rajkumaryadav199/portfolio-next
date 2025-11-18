"use client"
import Link from 'next/link';
import React from 'react';
import { RiLinkedinFill, RiYoutubeFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri';
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
      {icons.map((icon, index) => (
        <Link
          href={icon.path}
          key={index}
          className={`${iconsStyles}`}
          aria-label={icon.path.replace('/', '')}
        >
          {icon.name}
        </Link>
      ))}
    </div>
  )
}

export default Socials;
