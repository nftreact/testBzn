'use client';

import React, { ForwardedRef } from 'react';

import { Heading } from '@radix-ui/themes';

type HeadingProps = React.ComponentProps<typeof Heading> & {
  children: React.ReactNode;
};

const AppHeading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, ...props }: HeadingProps, forwardedRef: ForwardedRef<HTMLHeadingElement>) => (
    <Heading ref={forwardedRef} {...props}>
      {children}
    </Heading>
  )
);

AppHeading.displayName = 'Heading';

export default AppHeading;
