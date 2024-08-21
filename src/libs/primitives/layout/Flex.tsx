'use client';

import React, { ForwardedRef } from 'react';

import { Flex } from '@radix-ui/themes';

type AppFlexProps = React.ComponentProps<typeof Flex> & {
  children: React.ReactNode;
};

const AppFlex = React.forwardRef<HTMLDivElement, AppFlexProps>(
  ({ children, ...props }: AppFlexProps, forwardedRef: ForwardedRef<HTMLDivElement>) => (
    <Flex ref={forwardedRef} {...props}>
      {children}
    </Flex>
  )
);

AppFlex.displayName = 'Flex';

export default AppFlex;
