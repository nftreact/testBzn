'use client';

import React from 'react';

import Link from 'next/link';

import styled from 'styled-components';

import { Button, Flex } from '@/libs/primitives';

const DesktopHeader = () => {
  return (
    <Root>
      <Flex gap={'10px'} align={'center'}>
        <Flex>logo</Flex>
        <Flex>menu</Flex>
      </Flex>
      <Flex p={'2px'} gap={'2px'} align={'center'} style={{ border: '1px solid #000', borderRadius: '5px' }}>
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

export default DesktopHeader;

const Root = styled.header`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding: 16px 20px;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px;
  }

  button {
    background-color: #fff;
  }
`;
