'use client';

import React, { forwardRef } from 'react';

import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type CardProps = {
  value: string;
} & React.HTMLAttributes<HTMLDivElement>; // Extend with HTMLDivElement attributes

/**
 * Card Component
 * _______________________________________________________________________________
 */

const Card = forwardRef<HTMLDivElement, CardProps>(({ value, ...rest }, ref) => {
  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root ref={ref} {...rest}>
      <Text>{value}</Text>
    </Root>
  );
});

export default Card;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  border: 1px solid #6a6a6a;
  padding: 15px;
  border-radius: 8px;
  color: #37373750;
`;
