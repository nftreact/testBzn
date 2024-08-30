'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

import { Button, Flex } from '@/libs/primitives';

import header_logo from '../../public/image/header-logo.png';

const DesktopHeader = () => {
  return (
    <Root>
      <Flex gap={'10px'} align={'center'}>
        <Link href={'/'}>
          <Image src={header_logo} width={130} height={32} alt='header-logo' />
        </Link>
      </Flex>
      <Flex gap={'10px'}>
        <Flex
          p={'2px 15px'}
          gap={'2px'}
          align={'center'}
          style={{ border: '1px solid #009C9B', borderRadius: '12px' }}
        >
          <Link href={'/planner'}>
            <Button style={{ color: '#009C9B' }} variant='soft'>
              برنامه ساز سفر
            </Button>
          </Link>
        </Flex>
        <Flex
          p={'2px 15px'}
          gap={'2px'}
          align={'center'}
          style={{ border: '1px solid #009C9B', borderRadius: '12px' }}
        >
          <Link href={'/auth/login/receiveCode'}>
            <Button style={{ color: '#009C9B' }} variant='soft'>
              ورود
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Root>
  );
};

export default DesktopHeader;

const Root = styled.header`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    padding: 16px 20px;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 10;
  }

  button {
    background-color: #fff;
  }
`;
