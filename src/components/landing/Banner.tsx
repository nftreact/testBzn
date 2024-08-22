'use client';

import React from 'react';

import styled from 'styled-components';

import { Box, Section } from '@/libs/primitives';

const Banner = () => {
  return (
    <Section p='1'>
      <BoxRoot>Banner</BoxRoot>
    </Section>
  );
};

export default Banner;

const BoxRoot = styled(Box)`
  display: flex;
  height: 200px;
  justify-content: center;
  border: 1px solid #6a6a6a;
  width: 100%;
`;
