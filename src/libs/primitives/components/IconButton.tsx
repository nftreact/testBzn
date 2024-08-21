'use client';

import React, { ForwardedRef } from 'react';

import { IconButton } from '@radix-ui/themes';

// Importing IconButton from Radix UI

type AppIconButtonProps = React.ComponentProps<typeof IconButton> & {
  children: React.ReactNode; // Allow any React nodes as children
};

const AppIconButton = React.forwardRef<HTMLButtonElement, AppIconButtonProps>(
  ({ children, ...props }: AppIconButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
    <IconButton ref={forwardedRef} {...props}>
      {children} {/* Render children inside the button */}
    </IconButton>
  )
);

AppIconButton.displayName = 'IconButton';

export default AppIconButton;
