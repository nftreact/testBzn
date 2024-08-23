'use client';

import React from 'react';

import Link from 'next/link';

import { styled } from 'styled-components';

import { Button, Flex, Text } from '@/libs/primitives';

const BottomNavigation = () => {
  const item = [
    { id: 1, key: 'خانه', path: '/' },
    { id: 2, key: 'برنامه ساز', path: '/planner' },
    { id: 3, key: 'پروفایل', path: '/profile' },
  ];
  return (
    <Root>
      <Flex
        p={'15px 0'}
        width={'100%'}
        style={{ borderRadius: '12px', border: '1px solid #F2F2F2', backgroundColor: '#fff' }}
      >
        {item.map(item => {
          return (
            <Link style={{ width: '100%' }} key={item.id} href={item.path}>
              <Flex justify={'center'}>
                <Button size={'3'} variant='soft' style={{ minWidth: '100px' }}>
                  <div
                    style={{ border: '1px solid #000', width: '20px', height: '20px', borderRadius: '50%' }}
                  />
                  <Text>{item.key}</Text>
                </Button>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </Root>
  );
};

export default BottomNavigation;

const Root = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;
