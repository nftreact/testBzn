'use client';

import React from 'react';

import { styled } from 'styled-components';

const MobileHeader = () => {
  return <Root>MobileHeader</Root>;
};

export default MobileHeader;

const Root = styled.header`
  display: block;
  border: 1px solid blue;

  @media (min-width: 768px) {
    display: none;
  }
`;
