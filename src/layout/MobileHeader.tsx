'use client';

import React from 'react';

import { styled } from 'styled-components';

import Home from '../../app/page';

const MobileHeader = () => {
  return (
    <Root>
      <Home />
    </Root>
  );
};

export default MobileHeader;

const Root = styled.header`
  display: block;
  border: 1px solid blue;

  @media (min-width: 768px) {
    display: none;
  }
`;
