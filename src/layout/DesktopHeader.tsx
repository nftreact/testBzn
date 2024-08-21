'use client';

import React from 'react';

import styled from 'styled-components';

const DesktopHeader = () => {
  return <Root>DesktopHeader</Root>;
};

export default DesktopHeader;

const Root = styled.header`
  display: none;

  @media (min-width: 768px) {
    border: 1px solid blue;
    display: block;
  }
`;
