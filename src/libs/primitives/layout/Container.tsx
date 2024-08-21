'use client';

import React, { ForwardedRef } from 'react';

import { Container } from '@radix-ui/themes';

type AppContainerProps = React.ComponentProps<typeof Container> & {
  children: React.ReactNode;
};

const AppContainer = React.forwardRef<HTMLDivElement, AppContainerProps>(
  ({ children, ...props }: AppContainerProps, forwardedRef: ForwardedRef<HTMLDivElement>) => (
    <Container ref={forwardedRef} {...props}>
      {children}
    </Container>
  )
);

AppContainer.displayName = 'Container';

export default AppContainer;
