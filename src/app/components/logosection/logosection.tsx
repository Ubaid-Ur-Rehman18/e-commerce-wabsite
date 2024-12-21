import React from 'react';
import Image from 'next/image';

export const LogoSection = () => {
  return (
    <div className='w-full max-w-[1440px] h-[122px] bg-black flex justify-evenly items-center mx-auto flex-wrap'>
        <Image
          src={'/versace.png'}
          width={166.5}
          height={33}
          alt='versace logo'
          className='w-[166.5px] h-[33px] md:w-[166.5px] md:h-[33px] flex-shrink-0'
        />
        <Image
          src={'/zara.png'}
          width={91}
          height={38}
          alt='zara logo'
          className='w-[91px] h-[38px] md:w-[91px] md:h-[38px] flex-shrink-0'
        />
        <Image
          src={'/gucci.png'}
          width={156}
          height={36}
          alt='gucci logo'
          className='w-[156px] h-[36px] md:w-[156px] md:h-[36px] flex-shrink-0'
        />
        <Image
          src={'/prada-logo-1 1.png'}
          width={194}
          height={32}
          alt='prada logo'
          className='w-[194px] h-[32px] md:w-[194px] md:h-[32px] flex-shrink-0'
        />
        <Image
          src={'/ck.png'}
          width={207}
          height={33}
          alt='ck logo'
          className='w-[207px] h-[33px] md:w-[207px] md:h-[33px] flex-shrink-0'
        />
    </div>
  );
}
