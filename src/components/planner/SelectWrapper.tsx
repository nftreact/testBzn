'use client';

import { ReactNode } from 'react';

import { Flex, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type SelectWrapperProps = {
  children: ReactNode;
  title: string;
};

const SelectWrapper = ({ children, title }: SelectWrapperProps) => {
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
    <Flex gap={'10px'} direction={'column'}>
      <Text style={{ paddingRight: '10px' }}>{title}</Text>
      {children}
    </Flex>
  );
};

export default SelectWrapper;

/**
 * styled-component
 * _______________________________________________________________________________
 */
