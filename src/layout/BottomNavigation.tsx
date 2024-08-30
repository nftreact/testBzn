'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { styled } from 'styled-components';

import { Button, Flex, Text } from '@/libs/primitives';

import {
  HomeIconBottomNavigation,
  PlannerBottomNavigation,
  ProfileBottomNavigation,
} from '../../public/icon';

const BottomNavigation = () => {
  const segment = usePathname();
  const item = [
    { id: 1, key: 'خانه', path: '/', segment: '/', icon: HomeIconBottomNavigation },
    { id: 2, key: 'برنامه ساز', path: '/planner', segment: '/planner', icon: PlannerBottomNavigation },
    { id: 3, key: 'پروفایل', path: '/profile', segment: '/profile', icon: ProfileBottomNavigation },
  ];

  return (
    <Root>
      <Flex
        p={'8px 0'}
        width={'100%'}
        style={{ borderRadius: '8px', border: '1px solid #F2F2F2', backgroundColor: '#F9F9FB' }}
      >
        {item.map(item => {
          return (
            <Link style={{ width: '100%' }} key={item.id} href={item.path}>
              <Flex justify={'center'}>
                <ButtonStyle
                  isSelected={segment === item.segment}
                  size={'4'}
                  variant='soft'
                  style={{ minWidth: '100px' }}
                >
                  <item.icon fill='red' />
                  {segment === item.segment && <Text>{item.key}</Text>}
                </ButtonStyle>
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
  padding: 16px;
  z-index: 1;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ButtonStyle = styled(Button)<{ isSelected: boolean }>`
  svg {
    path {
      fill: ${({ isSelected }) => (isSelected ? '#fff' : '#62636C')};
    }
  }

  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    background-color: ${({ isSelected }) => (isSelected ? '#009C9B' : '#F9F9FB')};
    color: #fcfcfd;
    border-radius: 8px;
    padding: 12px 15px;
  }
`;
