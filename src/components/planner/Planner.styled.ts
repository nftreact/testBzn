'use client';

import styled from 'styled-components';

import { Flex } from '@/libs/primitives';

export const Root = styled(Flex)`
  @media (min-width: 1024px) {
    border-radius: 4px;
    box-shadow:
      0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
      0 0 0 0.5px var(--black-a1),
      0 1px 1px 0 var(--gray-a2),
      0 2px 1px -1px var(--black-a1),
      0 1px 3px 0 var(--black-a1);
  }
`;
