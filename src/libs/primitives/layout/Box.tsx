'use client';

import React, { ForwardedRef } from 'react';

import { Box } from '@radix-ui/themes';

type AppBoxProps = React.ComponentProps<typeof Box> & {
  children: React.ReactNode;
};

const AppBox = React.forwardRef<HTMLDivElement, AppBoxProps>(
  ({ children, ...props }: AppBoxProps, forwardedRef: ForwardedRef<HTMLDivElement>) => (
    <Box ref={forwardedRef} {...props}>
      {children}
    </Box>
  )
);

AppBox.displayName = 'Box';

export default AppBox;
