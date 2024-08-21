'use client';

import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return <Root>Footer</Root>;
};

export default Footer;

const Root = styled.footer`
  display: none;

  @media (min-width: 768px) {
    border: 1px solid blue;
    display: block;
  }
`;
