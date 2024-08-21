'use client';

import React, { ForwardedRef } from 'react';

import { Grid } from '@radix-ui/themes';

type AppGridProps = React.ComponentProps<typeof Grid> & {
  children: React.ReactNode;
};

const AppGrid = React.forwardRef<HTMLDivElement, AppGridProps>(
  ({ children, ...props }: AppGridProps, forwardedRef: ForwardedRef<HTMLDivElement>) => (
    <Grid ref={forwardedRef} {...props}>
      {children}
    </Grid>
  )
);

AppGrid.displayName = 'Grid';

export default AppGrid;
