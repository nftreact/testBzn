'use client';

import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import Link from 'next/link';

import { styled } from 'styled-components';

import { Button, Flex, IconButton, Text } from '@/libs/primitives';

import Menu from './Menu';

const MobileHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleDrawer = () => {
    setIsOpenMenu(prevState => !prevState);
  };

  return (
    <Root>
      <Flex minWidth={'20%'}>
        <IconButton onClick={toggleDrawer} style={{ border: '1px solid #000' }} size={'3'}>
          m
        </IconButton>
      </Flex>
      <Drawer open={isOpenMenu} onClose={toggleDrawer} direction='right'>
        <Menu />
      </Drawer>
      <Link href={'/'}>
        <Text>logo</Text>
      </Link>
      <Flex
        minWidth={'20%'}
        gap={'2px'}
        align={'center'}
        style={{ border: '1px solid #000', borderRadius: '5px' }}
      >
        <Link href={'/auth/login?receiveCode'}>
          <Button variant='soft'>ورود</Button>
        </Link>
        /
        <Link href={'/auth/register'}>
          <Button variant='soft'>عضویت</Button>
        </Link>
      </Flex>
    </Root>
  );
};

export default MobileHeader;

const Root = styled.header`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px;
  display: block;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }

  button {
    background-color: #fff !important;
  }
`;
