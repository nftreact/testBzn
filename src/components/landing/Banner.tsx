'use client';

import React from 'react';

import Image, { StaticImageData } from 'next/image';

import { Flex } from '@/libs/primitives';

type Props = {
  src: StaticImageData;
};

const Banner = ({ src }: Props) => {
  return (
    <Flex
      m={'auto'}
      maxWidth={{ initial: '100%', md: '1000px' }}
      position={'relative'}
      justify={'center'}
      align={'center'}
      minHeight={'150px'}
      width={'100%'}
      style={{ borderRadius: '8px' }}
    >
      <Image fill src={src} alt='banner-image' />
    </Flex>
  );
};

export default Banner;
