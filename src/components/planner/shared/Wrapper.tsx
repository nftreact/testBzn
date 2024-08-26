'use client';

import { ReactNode } from 'react';

import { Flex, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type WrapperProps = {
  children: ReactNode;
  title: string;
};

const Wrapper = ({ children, title }: WrapperProps) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex width={'100%'} gap={'10px'} direction={'column'}>
      <Text style={{ paddingRight: '10px' }}>{title}</Text>
      {children}
    </Flex>
  );
};

export default Wrapper;

/**
 * styled-component
 * _______________________________________________________________________________
 */
