import React from 'react';
import Image from 'next/image';

const Devimg = ({containerStyle, imgSrc}) => {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt='developer image'/>
    </div>
  )
}

export default Devimg
