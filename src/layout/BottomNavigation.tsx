'use client';

import React from 'react';

import { styled } from 'styled-components';

import { Flex } from '@/libs/primitives';

const BottomNavigation = () => {
  return <Root>BottomNavigation</Root>;
};

export default BottomNavigation;

const Root = styled(Flex)`
  display: block;
  border: 1px solid blue;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
