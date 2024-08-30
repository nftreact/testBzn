'use client';

import { ReactNode } from 'react';

import { Flex, Heading } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type BottomSheetWrapperProps = {
  title: string;
  children: ReactNode;
};

const BottomSheetWrapper = ({ title, children }: BottomSheetWrapperProps) => {
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
    <Flex direction={'column'} gap={'32px'} p={'16px'}>
      <Heading style={{ fontSize: '20px', color: '#1e1f2475' }} as='h1'>
        {title}
      </Heading>
      {children}
    </Flex>
  );
};

export default BottomSheetWrapper;

/**
 * styled-component
 * _______________________________________________________________________________
 */
